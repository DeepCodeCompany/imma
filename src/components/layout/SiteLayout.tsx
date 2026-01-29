import { Outlet } from "react-router-dom";
import SiteHeader from "./SiteHeader";

export default function SiteLayout() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="container-app py-6">
        <Outlet />
      </main>

      <footer className="mt-12 border-t border-slate-200/70 bg-white dark:border-slate-800/70 dark:bg-slate-950">
        <div className="container-app py-10">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="text-sm font-semibold">IMMA</div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Instituto Municipal de la Mujer · Aguascalientes. Sitio
                informativo (frontend) con contenido estático/mock.
              </p>
            </div>

            <div>
              <div className="text-sm font-semibold">Contacto</div>
              <div className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div>Tel: (449) 000 0000</div>
                <div>Horario: Lun a Vie · 9:00 a 17:00</div>
                <div>Ubicación: Aguascalientes, Ags.</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold">Enlaces</div>
              <div className="mt-2 grid gap-2 text-sm">
                <a
                  className="text-violet-700 hover:underline dark:text-violet-300"
                  href="/transparencia"
                >
                  Transparencia
                </a>
                <a
                  className="text-violet-700 hover:underline dark:text-violet-300"
                  href="/programas"
                >
                  Programas
                </a>
                <a
                  className="text-violet-700 hover:underline dark:text-violet-300"
                  href="/eventos"
                >
                  Eventos
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-sm text-slate-500 dark:border-slate-800/70 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
            <div>© {new Date().getFullYear()} · IMMA Aguascalientes</div>
            <div className="flex gap-4">
              <span className="hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer">
                Facebook
              </span>
              <span className="hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer">
                Instagram
              </span>
              <span className="hover:text-slate-700 dark:hover:text-slate-200 cursor-pointer">
                WhatsApp
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
