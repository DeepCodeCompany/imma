import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type Tree = Record<
  string,
  Record<string, Record<string, { title: string; href: string }[]>>
>;
// Tree[year][month][section] = docs[]

const MONTHS_ORDER = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

function normalizeMonth(m: string) {
  // Mantén como viene en tu folder (Enero, Febrero...) pero por si llega distinto:
  const t = m.trim();
  const found = MONTHS_ORDER.find((x) => x.toLowerCase() === t.toLowerCase());
  return found ?? t;
}

function buildTransparenciaTree(): Tree {
  // Trae TODOS los PDFs bajo src/assets/Transparencia/... (recursivo)
  const modules = import.meta.glob("../assets/Transparencia/**/*.pdf", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  // Ejemplo de key: "../assets/Transparencia/CuentaPublica2025/Diciembre/InformacionPresupuestal/10. Edo....pdf"
  const tree: Tree = {};

  for (const [path, url] of Object.entries(modules)) {
    const parts = path.split("/");

    const idx = parts.findIndex((p) => p === "Transparencia");
    if (idx < 0) continue;

    const yearFolder = parts[idx + 1]; // CuentaPublica2025
    const monthFolder = parts[idx + 2]; // Diciembre
    const sectionFolder = parts[idx + 3]; // InformacionPresupuestal
    const fileName = parts[parts.length - 1]; // xxx.pdf

    if (!yearFolder || !monthFolder || !sectionFolder || !fileName) continue;

    const year = yearFolder.replace(/^CuentaPublica/i, ""); // "2025"
    const month = normalizeMonth(monthFolder);

    const section = sectionFolder; // mantenemos folder name, se “bonifica” en la otra página
    const title = decodeURIComponent(fileName).replace(/\.pdf$/i, "");

    tree[year] ??= {};
    tree[year][month] ??= {};
    tree[year][month][section] ??= [];
    tree[year][month][section].push({ title, href: url });
  }

  // Ordena docs por nombre (opcional)
  for (const y of Object.keys(tree)) {
    for (const m of Object.keys(tree[y])) {
      for (const s of Object.keys(tree[y][m])) {
        tree[y][m][s].sort((a, b) => a.title.localeCompare(b.title, "es"));
      }
    }
  }

  return tree;
}

function YearAccordion({
  year,
  months,
  isOpen,
  onToggle,
}: {
  year: string;
  months: string[];
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
        <div className="text-imma-700 font-extrabold text-lg">
          Cuenta pública {year}
        </div>
        <div className="text-imma-700 font-black text-xl">
          {isOpen ? "−" : "+"}
        </div>
      </button>

      {isOpen && (
        <div className="divide-y divide-slate-200 bg-white">
          {months.map((m) => (
            <Link
              key={m}
              to={`/transparencia/${year}/${encodeURIComponent(m)}`}
              className="block px-6 py-4 hover:bg-slate-50 font-semibold text-slate-700"
            >
              {m}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function TransparenciaIndexPage() {
  const tree = useMemo(() => buildTransparenciaTree(), []);
  const years = useMemo(
    () => Object.keys(tree).sort((a, b) => Number(b) - Number(a)),
    [tree]
  );

  const [openYear, setOpenYear] = useState<string | null>(years[0] ?? null);

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">TRANSPARENCIA</div>
      </section>

      <section className="space-y-6">
        {years.map((y) => {
          const monthKeys = Object.keys(tree[y] ?? {});
          // Ordena meses en orden natural (Enero..Diciembre), pero solo los disponibles
          const monthsSorted = MONTHS_ORDER.filter((m) =>
            monthKeys.includes(m)
          );
          // Si hubiera meses fuera del set (raro), los agregamos al final:
          const extra = monthKeys.filter((m) => !MONTHS_ORDER.includes(m));
          const months = [...monthsSorted, ...extra];

          return (
            <YearAccordion
              key={y}
              year={y}
              months={months}
              isOpen={openYear === y}
              onToggle={() => setOpenYear(openYear === y ? null : y)}
            />
          );
        })}
      </section>
    </div>
  );
}
