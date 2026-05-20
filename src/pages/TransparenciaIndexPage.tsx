import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type DocItem = {
  title: string;
  href: string;
};

type Tree = Record<string, Record<string, Record<string, DocItem[]>>>;
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

function normalizeMonth(month: string) {
  const cleanMonth = month.trim();

  const found = MONTHS_ORDER.find(
    (x) => x.toLowerCase() === cleanMonth.toLowerCase()
  );

  return found ?? cleanMonth;
}

function getYearFromFolder(folderName: string) {
  return folderName.replace(/^CuentaPublica/i, "").trim();
}

function buildTransparenciaTree(): Tree {
  const modules = import.meta.glob("../assets/Transparencia/**/*.pdf", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  const tree: Tree = {};

  for (const [path, url] of Object.entries(modules)) {
    const parts = path.split("/");

    const transparenciaIndex = parts.findIndex((p) => p === "Transparencia");
    if (transparenciaIndex < 0) continue;

    const yearFolder = parts[transparenciaIndex + 1]; // CuentaPublica2025 / CuentaPublica2026
    const monthFolder = parts[transparenciaIndex + 2]; // Diciembre / Marzo
    const sectionFolder = parts[transparenciaIndex + 3]; // InformacionPresupuestal
    const fileName = parts[parts.length - 1]; // archivo.pdf

    if (!yearFolder || !monthFolder || !sectionFolder || !fileName) continue;

    const year = getYearFromFolder(yearFolder);
    const month = normalizeMonth(monthFolder);
    const section = sectionFolder;
    const title = decodeURIComponent(fileName).replace(/\.pdf$/i, "");

    tree[year] ??= {};
    tree[year][month] ??= {};
    tree[year][month][section] ??= [];

    tree[year][month][section].push({
      title,
      href: url,
    });
  }

  for (const year of Object.keys(tree)) {
    for (const month of Object.keys(tree[year])) {
      for (const section of Object.keys(tree[year][month])) {
        tree[year][month][section].sort((a, b) =>
          a.title.localeCompare(b.title, "es")
        );
      }
    }
  }

  return tree;
}

function sortMonths(monthKeys: string[]) {
  const normalMonths = MONTHS_ORDER.filter((month) => monthKeys.includes(month));
  const extraMonths = monthKeys.filter((month) => !MONTHS_ORDER.includes(month));

  return [...normalMonths, ...extraMonths];
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
          {months.length === 0 ? (
            <div className="px-6 py-4 text-slate-500 font-medium">
              No hay documentos disponibles.
            </div>
          ) : (
            months.map((month) => (
              <Link
                key={`${year}-${month}`}
                to={`/transparencia/${year}/${encodeURIComponent(month)}`}
                className="block px-6 py-4 hover:bg-slate-50 font-semibold text-slate-700"
              >
                {month}
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default function TransparenciaIndexPage() {
  const tree = useMemo(() => buildTransparenciaTree(), []);

  const years = useMemo(() => {
    return Object.keys(tree).sort((a, b) => Number(b) - Number(a));
  }, [tree]);

  const [openYear, setOpenYear] = useState<string | null>(() => {
    return years[0] ?? null;
  });

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">TRANSPARENCIA</div>
      </section>

      <section className="space-y-6">
        {years.length === 0 ? (
          <div className="card px-6 py-5 text-slate-600 font-semibold">
            No hay documentos de transparencia disponibles.
          </div>
        ) : (
          years.map((year) => {
            const monthKeys = Object.keys(tree[year] ?? {});
            const months = sortMonths(monthKeys);

            return (
              <YearAccordion
                key={year}
                year={year}
                months={months}
                isOpen={openYear === year}
                onToggle={() =>
                  setOpenYear((current) => (current === year ? null : year))
                }
              />
            );
          })
        )}
      </section>
    </div>
  );
}