type Casa = {
  nombre: string;
  direccion: string;
  telefono: string;
  horario: string;
};

const CASAS: Casa[] = [
  {
    nombre: "Casa de la Mujer · Centro",
    direccion: "Dirección mock, Aguascalientes, Ags.",
    telefono: "449 000 0000",
    horario: "Lun a Vie · 9:00 a 17:00",
  },
  {
    nombre: "Casa de la Mujer · Oriente",
    direccion: "Dirección mock, Aguascalientes, Ags.",
    telefono: "449 000 0001",
    horario: "Lun a Vie · 9:00 a 17:00",
  },
  {
    nombre: "Casa de la Mujer · Poniente",
    direccion: "Dirección mock, Aguascalientes, Ags.",
    telefono: "449 000 0002",
    horario: "Lun a Vie · 9:00 a 17:00",
  },
];

export default function CasasPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">CASAS DE LA MUJER</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Ubicaciones y atención</h2>
        <p className="mt-4 text-lg text-slate-700">
          Consulta ubicaciones de referencia (mock). Después conectamos esto a
          contenido real o PDFs oficiales.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {CASAS.map((c) => (
            <div key={c.nombre} className="rounded-3xl bg-[#efe9f8] p-6">
              <div className="text-xl font-extrabold">{c.nombre}</div>
              <div className="mt-3 text-slate-700">
                <div>
                  <span className="font-bold">Dirección:</span> {c.direccion}
                </div>
                <div className="mt-2">
                  <span className="font-bold">Tel:</span> {c.telefono}
                </div>
                <div className="mt-2">
                  <span className="font-bold">Horario:</span> {c.horario}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button className="btn-primary" type="button">
                  Solicitar info
                </button>
                <button className="btn-secondary" type="button">
                  Ver mapa
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          Atención y canalización
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Si necesitas orientación, podemos canalizarte con el área adecuada
          según tu caso (contenido mock).
        </p>
      </section>
    </div>
  );
}
