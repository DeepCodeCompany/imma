import { Link, useParams } from "react-router-dom";

type Servicio = {
  id: string;
  titulo: string;
  intro: string;
  incluye: string[];
  requisitos: string[];
};

const DATA: Servicio[] = [
  {
    id: "psicologia",
    titulo: "Atención psicológica",
    intro: "Orientación y acompañamiento emocional (mock).",
    incluye: ["Primera orientación", "Canalización", "Seguimiento"],
    requisitos: [
      "Identificación (si aplica)",
      "Datos de contacto",
      "Cita/registro (mock)",
    ],
  },
  {
    id: "juridico",
    titulo: "Asesoría jurídica",
    intro: "Información y guía sobre procesos y derechos (mock).",
    incluye: [
      "Orientación inicial",
      "Revisión de requisitos",
      "Vinculación a instancias",
    ],
    requisitos: [
      "Identificación (si aplica)",
      "Documentos relacionados (si aplica)",
    ],
  },
  {
    id: "trabajo-social",
    titulo: "Trabajo social",
    intro: "Evaluación y canalización a apoyos disponibles (mock).",
    incluye: ["Diagnóstico", "Canalización", "Gestión"],
    requisitos: ["Datos de contacto", "Breve descripción del caso"],
  },
  {
    id: "prevencion",
    titulo: "Prevención y comunidad",
    intro: "Actividades informativas y talleres preventivos (mock).",
    incluye: ["Charlas", "Talleres", "Difusión"],
    requisitos: ["Registro (mock)", "Asistencia"],
  },
];

export default function ServicioDetailPage() {
  const { id } = useParams();
  const servicio = DATA.find((x) => x.id === id);

  if (!servicio) {
    return (
      <div className="space-y-10">
        <section className="rounded-3xl bg-[#efe9f8] py-10 text-center">
          <div className="page-title">SERVICIO NO ENCONTRADO</div>
          <p className="mt-4 text-lg text-slate-700">
            No encontramos el servicio solicitado.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/servicios" className="btn-primary">
              Volver a Servicios
            </Link>
            <Link to="/" className="btn-secondary">
              Inicio
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">SERVICIOS</div>
        <p className="mt-3 text-lg text-slate-700 font-bold">
          {servicio.titulo}
        </p>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-black">{servicio.titulo}</h2>
        <p className="mt-4 text-lg text-slate-700">{servicio.intro}</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-[#efe9f8] p-6">
            <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
              ¿Qué incluye?
            </div>

            <ul className="mt-4 space-y-2 text-slate-800">
              {servicio.incluye.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-imma-700" />
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-[#efe9f8] p-6">
            <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
              Requisitos (mock)
            </div>

            <ul className="mt-4 space-y-2 text-slate-800">
              {servicio.requisitos.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-imma-700" />
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/servicios" className="btn-primary">
            Volver
          </Link>
          <Link to="/casas" className="btn-secondary">
            Ver Casas de la Mujer
          </Link>
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Quieres atención?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Próximamente agregamos contacto y registro (por ahora solo frontend).
        </p>
      </section>
    </div>
  );
}
