import { Link } from "react-router-dom";

type Programa = {
  titulo: string;
  desc: string;
  bullets: string[];
};

const PROGRAMAS: Programa[] = [
  {
    titulo: "Talleres de bienestar",
    desc: "Actividades y sesiones informativas (mock).",
    bullets: ["Autocuidado", "Habilidades", "Red de apoyo"],
  },
  {
    titulo: "Capacitación y empleo",
    desc: "Orientación para crecimiento y autonomía económica (mock).",
    bullets: ["Capacitación", "Vinculación", "Seguimiento"],
  },
  {
    titulo: "Prevención y comunidad",
    desc: "Campañas y acciones informativas (mock).",
    bullets: ["Prevención", "Difusión", "Eventos"],
  },
];

export default function ProgramasPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">PROGRAMAS</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Programas y acciones</h2>
        <p className="mt-4 text-lg text-slate-700">
          Aquí mostraremos programas del IMMA (por ahora es contenido mock).
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {PROGRAMAS.map((p) => (
            <div key={p.titulo} className="rounded-3xl bg-[#efe9f8] p-6">
              <div className="text-xl font-extrabold">{p.titulo}</div>
              <div className="mt-2 text-slate-700">{p.desc}</div>

              <ul className="mt-4 space-y-2 text-slate-800">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-imma-700" />
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <Link to="/eventos" className="btn-primary">
                  Ver eventos
                </Link>
                <Link to="/consejos" className="btn-secondary">
                  Ver consejos
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Te interesa un taller?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Después agregamos registro/solicitud (por ahora solo frontend).
        </p>

        <div className="mt-6">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition bg-white text-imma-800 hover:bg-violet-50"
          >
            Ver servicios relacionados
          </Link>
        </div>
      </section>
    </div>
  );
}
