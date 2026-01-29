import { Link } from "react-router-dom";

type Consejo = {
  id: string;
  titulo: string;
  resumen: string;
  categoria: string;
  fecha: string;
};

const CONSEJOS: Consejo[] = [
  {
    id: "autocuidado",
    titulo: "Autocuidado: primeros pasos para tu bienestar",
    resumen:
      "Ideas prácticas para fortalecer hábitos saludables y priorizar tu bienestar (mock).",
    categoria: "Bienestar",
    fecha: "Enero 2026",
  },
  {
    id: "red-apoyo",
    titulo: "Red de apoyo: cómo pedir ayuda y a quién acudir",
    resumen:
      "Estrategias para identificar apoyo cercano e institucional (mock).",
    categoria: "Orientación",
    fecha: "Enero 2026",
  },
  {
    id: "recursos",
    titulo: "Recursos y canalización: guía rápida",
    resumen:
      "Cómo ubicar servicios, documentar información y canalizarte (mock).",
    categoria: "Recursos",
    fecha: "Febrero 2026",
  },
];

export default function ConsejosPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">CONSEJOS</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Artículos y recomendaciones</h2>
        <p className="mt-4 text-lg text-slate-700">
          Contenido informativo (mock) estilo blog. Después lo conectamos a
          datos reales.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {CONSEJOS.map((c) => (
            <div key={c.id} className="rounded-3xl bg-[#efe9f8] p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-extrabold text-imma-800">
                  {c.categoria}
                </span>
                <span className="text-sm font-bold text-slate-600">
                  {c.fecha}
                </span>
              </div>

              <div className="mt-4 text-2xl font-extrabold">{c.titulo}</div>
              <p className="mt-3 text-slate-700">{c.resumen}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={`/consejos/${c.id}`} className="btn-primary">
                  Leer más
                </Link>
                <Link to="/servicios" className="btn-secondary">
                  Ver servicios
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          Recursos para ti
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          En las próximas mejoras agregaremos categorías, búsqueda y filtros.
        </p>
      </section>
    </div>
  );
}
