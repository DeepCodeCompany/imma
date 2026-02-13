import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Doc = { title: string; href: string };
type Tree = Record<string, Record<string, Record<string, Doc[]>>>;

const SECTION_LABELS: Record<string, string> = {
  IndicadoresTrimestrales: "Indicadores Trimestrales",
  InformacionContable: "Información Contable",
  InformacionLeydeDisciplinaFinanciera:
    "Información Ley de Disciplina Financiera",
  InformacionPresupuestal: "Información Presupuestal",
  InformacionProgramatica: "Información Programática",
  OtrosReportes: "Otros Reportes",
};

const SECTION_ORDER = [
  "IndicadoresTrimestrales",
  "InformacionContable",
  "InformacionLeydeDisciplinaFinanciera",
  "InformacionPresupuestal",
  "InformacionProgramatica",
  "OtrosReportes",
];

function buildTransparenciaTree(): Tree {
  const modules = import.meta.glob("../assets/Transparencia/**/*.pdf", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const tree: Tree = {};

  for (const [path, url] of Object.entries(modules)) {
    const parts = path.split("/");
    const idx = parts.findIndex((p) => p === "Transparencia");
    if (idx < 0) continue;

    const yearFolder = parts[idx + 1]; // CuentaPublica2025
    const monthFolder = parts[idx + 2]; // Diciembre
    const sectionFolder = parts[idx + 3]; // InformacionPresupuestal
    const fileName = parts[parts.length - 1];

    if (!yearFolder || !monthFolder || !sectionFolder || !fileName) continue;

    const year = yearFolder.replace(/^CuentaPublica/i, "");
    const month = decodeURIComponent(monthFolder).trim();
    const section = sectionFolder.trim();
    const title = decodeURIComponent(fileName).replace(/\.pdf$/i, "");

    tree[year] ??= {};
    tree[year][month] ??= {};
    tree[year][month][section] ??= [];
    tree[year][month][section].push({ title, href: url });
  }

  // Ordena
  for (const y of Object.keys(tree)) {
    for (const m of Object.keys(tree[y])) {
      for (const s of Object.keys(tree[y][m])) {
        tree[y][m][s].sort((a, b) => a.title.localeCompare(b.title, "es"));
      }
    }
  }

  return tree;
}

function PdfIcon() {
  return (
    <div className="shrink-0">
      <svg width="54" height="54" viewBox="0 0 64 64" fill="none">
        <path
          d="M18 6h20l10 10v42H18V6z"
          stroke="#6525a3"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path
          d="M38 6v12h12"
          stroke="#6525a3"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <rect x="20" y="40" width="24" height="14" rx="4" fill="#6525a3" />
        <text
          x="32"
          y="51"
          textAnchor="middle"
          fontSize="10"
          fill="white"
          fontWeight="800"
        >
          PDF
        </text>
      </svg>
    </div>
  );
}

function SectionAccordion({
  title,
  docs,
  isOpen,
  onToggle,
}: {
  title: string;
  docs: Doc[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="card overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 bg-[#efe9f8] text-left"
      >
        <div className="text-imma-700 font-extrabold text-lg">{title}</div>
        <div className="text-imma-700 font-black text-xl">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {isOpen && (
        <div className="divide-y divide-slate-200">
          {docs.map((d) => (
            <div
              key={d.title}
              className="flex items-center gap-4 px-6 py-5 bg-white"
            >
              <PdfIcon />
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                download
                className="text-imma-700 font-extrabold hover:underline text-lg"
              >
                {d.title}
              </a>
            </div>
          ))}
          {docs.length === 0 && (
            <div className="px-6 py-5 text-slate-500">Sin documentos.</div>
          )}
        </div>
      )}
    </div>
  );
}

export default function TransparenciaMesPage() {
  const { year, month } = useParams();
  const tree = useMemo(() => buildTransparenciaTree(), []);

  const y = (year ?? "").trim();
  const m = decodeURIComponent(month ?? "").trim();

  const data = tree?.[y]?.[m] ?? {};
  const sectionKeys = Object.keys(data);

  // Armamos lista de secciones en orden fijo + cualquier extra al final
  const sectionsOrdered = [
    ...SECTION_ORDER.filter((s) => sectionKeys.includes(s)),
    ...sectionKeys.filter((s) => !SECTION_ORDER.includes(s)),
  ];

  // abre por default la primera con docs
  const firstOpen =
    sectionsOrdered.find((s) => (data[s]?.length ?? 0) > 0) ??
    sectionsOrdered[0] ??
    null;

  const [openSection, setOpenSection] = useState<string | null>(firstOpen);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">TRANSPARENCIA</div>
        <div className="mt-2 text-slate-700 font-semibold">
          Cuenta pública {y} • {m}
        </div>

        <div className="mt-4">
          <Link
            to="/transparencia"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2 bg-white border border-slate-200 hover:bg-slate-50 font-bold text-imma-700"
          >
            ← Volver
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        {sectionsOrdered.length === 0 && (
          <div className="card p-6 text-slate-600">
            No se encontraron PDFs para {y} / {m}.
          </div>
        )}

        {sectionsOrdered.map((s) => (
          <SectionAccordion
            key={s}
            title={SECTION_LABELS[s] ?? s}
            docs={data[s] ?? []}
            isOpen={openSection === s}
            onToggle={() => setOpenSection(openSection === s ? null : s)}
          />
        ))}
      </section>
    </div>
  );
}
