import { Link } from "react-router-dom";

export default function QuienesSomosPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">¿QUIÉNES SOMOS?</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">
          IMMA · Instituto Municipal de la Mujer
        </h2>
        <p className="mt-4 text-lg text-slate-700">
          El IMMA es una instancia municipal enfocada en impulsar el bienestar,
          la orientación y el acompañamiento para las mujeres de Aguascalientes.
          (Contenido <b>mock</b> por ahora; aquí irá el texto oficial).
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl bg-[#efe9f8] p-6">
            <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
              Misión
            </div>
            <p className="mt-3 text-slate-700">
              Brindar orientación y canalización a servicios que fortalezcan el
              desarrollo y la seguridad de las mujeres.
            </p>
          </div>

          <div className="rounded-3xl bg-[#efe9f8] p-6">
            <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
              Visión
            </div>
            <p className="mt-3 text-slate-700">
              Construir una comunidad con igualdad de oportunidades y acceso a
              redes de apoyo.
            </p>
          </div>

          <div className="rounded-3xl bg-[#efe9f8] p-6">
            <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
              Enfoque
            </div>
            <p className="mt-3 text-slate-700">
              Prevención, atención, orientación y vinculación con instituciones
              y programas.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/servicios" className="btn-primary">
            Ver servicios
          </Link>
          <Link to="/programas" className="btn-secondary">
            Ver programas
          </Link>
        </div>
      </section>
    </div>
  );
}
