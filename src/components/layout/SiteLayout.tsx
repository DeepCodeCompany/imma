import { Outlet } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import SiteHeader from "./SiteHeader";

// ✅ Pon aquí tus imágenes (assets)
import bg1 from "../../assets/fondorosa.png";
import bg2 from "../../assets/fondo2.png";
import bg3 from "../../assets/fondo3.png";

function BackgroundCarousel({
  images,
  intervalMs = 6000,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIdx((prev) => (prev + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {images.map((src, i) => {
        const active = i === idx;
        return (
          <div
            key={src}
            className={[
              "absolute inset-0 transition-all duration-[1400ms] ease-in-out",
              active ? "opacity-100" : "opacity-0",
              // ✅ un toque de blur suave para que se vea moderno
              active ? "blur-0 scale-100" : "blur-sm scale-[1.03]",
            ].join(" ")}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              draggable={false}
            />

            {/* ✅ overlay: oscurece y unifica */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/55 to-white/85" />
          </div>
        );
      })}

      {/* ✅ textura ligera opcional */}
      <div className="absolute inset-0 opacity-[0.12] mix-blend-multiply [background-image:radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.18)_1px,transparent_0)] [background-size:18px_18px]" />
    </div>
  );
}

export default function SiteLayout() {
  const images = useMemo(() => [bg1, bg2, bg3], []);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* MAIN con carrusel de fondo */}
      <main className="relative">
        {/* fondo */}
        <BackgroundCarousel images={images} intervalMs={6000} />

        {/* contenido */}
        <div className="relative container-app py-6">
          <Outlet />
        </div>
      </main>

      <footer className="mt-12 border-t border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/80">
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
                <div>
                  Dirección: Calle Pedro Parga 247, Zona Centro, 20000
                  Aguascalientes, Ags.
                </div>
                <div>Teléfono: 449 915 7439</div>
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
