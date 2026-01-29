type Evento = {
  titulo: string;
  fecha: string;
  lugar: string;
  desc: string;
};

const EVENTOS: Evento[] = [
  {
    titulo: "Taller: Autocuidado y bienestar",
    fecha: "Febrero 2026 · 10:00",
    lugar: "IMMA (mock)",
    desc: "Sesión informativa y dinámica para fortalecer hábitos de bienestar (mock).",
  },
  {
    titulo: "Charla: Derechos y recursos",
    fecha: "Marzo 2026 · 12:00",
    lugar: "Casa de la Mujer · Centro (mock)",
    desc: "Orientación general sobre recursos y canalización disponible (mock).",
  },
  {
    titulo: "Jornada comunitaria",
    fecha: "Abril 2026 · 09:00",
    lugar: "Sede por confirmar (mock)",
    desc: "Actividades comunitarias de prevención y acompañamiento (mock).",
  },
];

export default function EventosPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">EVENTOS</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Actividades y calendario</h2>
        <p className="mt-4 text-lg text-slate-700">
          Lista de eventos (contenido mock). Más adelante lo conectamos a datos
          reales.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {EVENTOS.map((e) => (
            <div key={e.titulo} className="rounded-3xl bg-[#efe9f8] p-6">
              <div className="text-xl font-extrabold">{e.titulo}</div>

              <div className="mt-3 space-y-1 text-slate-700">
                <div>
                  <span className="font-bold">Fecha:</span> {e.fecha}
                </div>
                <div>
                  <span className="font-bold">Lugar:</span> {e.lugar}
                </div>
              </div>

              <p className="mt-3 text-slate-700">{e.desc}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="button" className="btn-primary">
                  Ver detalle
                </button>
                <button type="button" className="btn-secondary">
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          Mantente informada
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Próximamente podremos publicar eventos con imágenes, categorías y
          registros.
        </p>
      </section>
    </div>
  );
}
