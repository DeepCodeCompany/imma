import { Link } from "react-router-dom";

function StatCard({
  title,
  value,
  hint,
}: {
  title: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
        {title}
      </div>
      <div className="mt-2 text-3xl font-black">{value}</div>
      <div className="mt-2 text-slate-600">{hint}</div>
    </div>
  );
}

function QuickCard({
  title,
  desc,
  to,
}: {
  title: string;
  desc: string;
  to: string;
}) {
  return (
    <div className="card p-6">
      <div className="text-xl font-extrabold">{title}</div>
      <div className="mt-2 text-slate-600">{desc}</div>
      <Link to={to} className="mt-5 inline-flex btn-primary">
        Ver más
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="card overflow-hidden">
        <div className="block-title">INSTITUTO MUNICIPAL DE LA MUJER</div>

        <div className="p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight">
                Atención, acompañamiento y orientación para las mujeres de
                Aguascalientes
              </h1>

              <p className="mt-4 text-lg text-slate-600">
                Este sitio es el portal informativo del IMMA. Aquí encontrarás
                servicios, programas, recursos y enlaces de transparencia.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/servicios" className="btn-primary">
                  Ver servicios
                </Link>
                <Link to="/contacto" className="btn-secondary">
                  Contacto
                </Link>
              </div>

              <div className="mt-6 inline-flex items-center rounded-2xl bg-[#efe9f8] px-5 py-3 text-sm font-bold text-imma-800">
                Línea de ayuda / Información:{" "}
                <span className="ml-2">449 9157439</span>
              </div>
            </div>

            {/* BLOQUE LATERAL (mock de aviso / imagen) */}
            <div className="rounded-3xl bg-[#efe9f8] p-6 md:p-8">
              <div className="text-sm font-extrabold uppercase tracking-wide text-imma-700">
                Aviso importante
              </div>
              <div className="mt-3 text-2xl font-black">Casas de la Mujer</div>
              <p className="mt-3 text-slate-700">
                Consulta ubicaciones y formas de atención disponibles (contenido
                mock por ahora).
              </p>

              <Link to="/casas" className="mt-5 inline-flex btn-primary">
                Ver ubicaciones Ags
              </Link>

              <div className="mt-6 rounded-3xl bg-white p-5 shadow-[0_12px_30px_rgba(0,0,0,.08)]">
                <div className="text-sm font-extrabold text-slate-900">
                  Horarios (ejemplo)
                </div>
                <div className="mt-2 text-slate-600">
                  Lunes a Viernes · 9:00 a 17:00
                </div>
                <div className="mt-1 text-slate-600">
                  Atención por cita y orientación inicial
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / INFO RÁPIDA */}
      <section className="grid gap-6 md:grid-cols-3">
        <StatCard
          title="Servicios"
          value="4+"
          hint="Trabajo social, asesoría psicológica, jurídica y más (mock)."
        />
        <StatCard
          title="Programas"
          value="6+"
          hint="Programas y talleres informativos con enfoque de apoyo."
        />
        <StatCard
          title="Transparencia"
          value="PDFs"
          hint="Documentos disponibles para consulta y descarga."
        />
      </section>

      {/* ACCESOS RÁPIDOS */}
      <section className="grid gap-6 lg:grid-cols-3">
        <QuickCard
          title="Servicios"
          desc="Consulta qué ofrece el IMMA y cómo solicitar información."
          to="/servicios"
        />
        <QuickCard
          title="Consejos"
          desc="Artículos tipo blog con recursos y recomendaciones."
          to="/consejos"
        />
        <QuickCard
          title="Transparencia"
          desc="Acceso a documentos y archivos en PDF."
          to="/transparencia"
        />
      </section>

      {/* BANDA FINAL */}
      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Necesitas orientación?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Podemos ayudarte a ubicar el servicio adecuado. Si es una emergencia,
          utiliza los números de atención inmediata correspondientes.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition bg-white text-imma-800 hover:bg-violet-50"
          >
            Ver servicios
          </Link>
          <Link
            to="/eventos"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition border border-white/30 hover:bg-white/10"
          >
            Ver eventos
          </Link>
        </div>
      </section>
    </div>
  );
}
