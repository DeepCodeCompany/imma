import { Link, useParams } from "react-router-dom";

type Consejo = {
  id: string;
  titulo: string;
  categoria: string;
  fecha: string;
  contenido: string[];
};

const DATA: Consejo[] = [
  {
    id: "autocuidado",
    titulo: "Autocuidado: primeros pasos para tu bienestar",
    categoria: "Bienestar",
    fecha: "Enero 2026",
    contenido: [
      "El autocuidado incluye acciones cotidianas para atender tu salud física y emocional.",
      "Procura descansar, hidratarte, alimentarte mejor y darte espacios de calma.",
      "Si te sientes saturada, busca apoyo: hablarlo con alguien de confianza puede ayudar.",
    ],
  },
  {
    id: "red-apoyo",
    titulo: "Red de apoyo: cómo pedir ayuda y a quién acudir",
    categoria: "Orientación",
    fecha: "Enero 2026",
    contenido: [
      "Una red de apoyo puede incluir familia, amistades, vecinas, comunidad y servicios institucionales.",
      "Pedir ayuda no es debilidad: es una acción de cuidado y prevención.",
      "Define a quién puedes llamar y qué información importante tener a la mano.",
    ],
  },
  {
    id: "recursos",
    titulo: "Recursos y canalización: guía rápida",
    categoria: "Recursos",
    fecha: "Febrero 2026",
    contenido: [
      "Identifica el tipo de apoyo que necesitas: emocional, legal, social o canalización.",
      "Anota datos clave: fechas, nombres, contactos y documentos importantes.",
      "Acércate al IMMA para orientación y referencia a instancias correspondientes.",
    ],
  },
];

export default function ConsejoDetailPage() {
  const { id } = useParams();
  const consejo = DATA.find((x) => x.id === id);

  if (!consejo) {
    return (
      <div className="space-y-10">
        <section className="rounded-3xl bg-[#efe9f8] py-10 text-center">
          <div className="page-title">CONSEJO NO ENCONTRADO</div>
          <p className="mt-4 text-lg text-slate-700">
            No encontramos el consejo solicitado.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link to="/consejos" className="btn-primary">
              Volver a Consejos
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
        <div className="page-title">CONSEJOS</div>
        <p className="mt-3 text-lg text-slate-700 font-bold">
          {consejo.categoria} · {consejo.fecha}
        </p>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-black">{consejo.titulo}</h2>

        <div className="mt-6 space-y-4 text-lg text-slate-700">
          {consejo.contenido.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/consejos" className="btn-primary">
            Volver
          </Link>
          <Link to="/servicios" className="btn-secondary">
            Ver servicios
          </Link>
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Necesitas orientación?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Próximamente agregaremos un módulo de contacto (solo frontend por
          ahora).
        </p>
      </section>
    </div>
  );
}
