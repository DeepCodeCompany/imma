import { Link } from "react-router-dom";

type Servicio = {
  id: string;
  titulo: string;
  desc: string;
  bullets: string[];
};

const SERVICIOS: Servicio[] = [
  {
    id: "psicologia",
    titulo: "Atención psicológica",
    desc: "Orientación y acompañamiento emocional (mock).",
    bullets: ["Primera orientación", "Canalización", "Seguimiento"],
  },
  {
    id: "juridico",
    titulo: "Asesoría jurídica",
    desc: "Información y guía sobre procesos y derechos (mock).",
    bullets: ["Orientación", "Requisitos", "Vinculación"],
  },
  {
    id: "trabajo-social",
    titulo: "Trabajo social",
    desc: "Evaluación y canalización a apoyos disponibles (mock).",
    bullets: ["Diagnóstico", "Canalización", "Gestión"],
  },
  {
    id: "prevencion",
    titulo: "Prevención y comunidad",
    desc: "Actividades informativas y talleres preventivos (mock).",
    bullets: ["Charlas", "Talleres", "Difusión"],
  },
];

export default function ServiciosPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">SERVICIOS</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">¿Cómo podemos ayudarte?</h2>
        <p className="mt-4 text-lg text-slate-700">
          Selecciona un servicio para ver más información (contenido mock).
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {SERVICIOS.map((s) => (
            <div key={s.id} className="rounded-3xl bg-[#efe9f8] p-6">
              <div className="text-2xl font-extrabold">{s.titulo}</div>
              <div className="mt-2 text-slate-700">{s.desc}</div>

              <ul className="mt-4 space-y-2 text-slate-800">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-imma-700" />
                    <span className="font-semibold">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={`/servicios/${s.id}`} className="btn-primary">
                  Ver detalle
                </Link>
                <Link to="/casas" className="btn-secondary">
                  Ver Casas de la Mujer
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Necesitas canalización?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Próximamente agregaremos un formulario de contacto (por ahora solo
          frontend).
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/quienes-somos"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition bg-white text-imma-800 hover:bg-violet-50"
          >
            Conocer el IMMA
          </Link>
          <Link
            to="/transparencia"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition border border-white/30 hover:bg-white/10"
          >
            Transparencia
          </Link>
        </div>
      </section>
    </div>
  );
}
