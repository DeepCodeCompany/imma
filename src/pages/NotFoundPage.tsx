import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-10 text-center">
        <div className="page-title">PÁGINA NO ENCONTRADA</div>
        <p className="mt-4 text-lg text-slate-700">
          Lo sentimos, la ruta que intentas visitar no existe.
        </p>

        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          <Link to="/" className="btn-primary">
            Ir al inicio
          </Link>
          <Link to="/servicios" className="btn-secondary">
            Ver servicios
          </Link>
        </div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Sugerencias</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-imma-700" />
            Verifica que la URL esté bien escrita.
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-imma-700" />
            Usa el menú superior para navegar.
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-imma-700" />
            Regresa al inicio y elige una sección.
          </li>
        </ul>
      </section>
    </div>
  );
}
