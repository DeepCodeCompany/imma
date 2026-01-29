type Doc = { titulo: string; href: string };

const BLOQUES: { titulo: string; docs: Doc[] }[] = [
  {
    titulo: "INFORMACIÓN CONTABLE",
    docs: [
      {
        titulo: "Cuenta Pública (mock)",
        href: "/docs/transparencia/informe-q1.pdf",
      },
      {
        titulo: "Estados Financieros (mock)",
        href: "/docs/transparencia/informe-q2.pdf",
      },
      { titulo: "Notas (mock)", href: "/docs/transparencia/informe-q1.pdf" },
      { titulo: "Anexos (mock)", href: "/docs/transparencia/informe-q2.pdf" },
    ],
  },
  {
    titulo: "LEY DE DISCIPLINA FINANCIERA",
    docs: [
      {
        titulo: "Documento 1 (mock)",
        href: "/docs/transparencia/informe-q1.pdf",
      },
      {
        titulo: "Documento 2 (mock)",
        href: "/docs/transparencia/informe-q2.pdf",
      },
      {
        titulo: "Documento 3 (mock)",
        href: "/docs/transparencia/informe-q1.pdf",
      },
      {
        titulo: "Documento 4 (mock)",
        href: "/docs/transparencia/informe-q2.pdf",
      },
    ],
  },
];

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

function Bloque({ titulo, docs }: { titulo: string; docs: Doc[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="block-title">{titulo}</div>

      <div className="divide-y divide-slate-200">
        {docs.map((d) => (
          <div
            key={d.titulo}
            className="flex items-center gap-4 px-6 py-5 bg-[#efe9f8]"
          >
            <PdfIcon />
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="text-imma-700 font-extrabold hover:underline text-lg"
            >
              {d.titulo}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TransparenciaPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">TRANSPARENCIA</div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        {BLOQUES.map((b) => (
          <Bloque key={b.titulo} titulo={b.titulo} docs={b.docs} />
        ))}
      </section>
    </div>
  );
}
