import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

// ✅ Carrusel de imágenes (assets/Programas)
import cartel1 from "../assets/Programas/cartel1.png";
import cartel2 from "../assets/Programas/cartel2.png";
import cartel3 from "../assets/Programas/cartel3.png";
import cartel4 from "../assets/Programas/cartel4.png";
import cartel5 from "../assets/Programas/cartel5.jpg";
import cartel6 from "../assets/Programas/cartel6.png";

// ✅ Fondo tipo "fondo2"
import fondo2 from "../assets/fondo2.png";

function Carousel({
  images,
  intervalMs = 5500,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIdx((p) => (p + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [images.length, intervalMs]);

  function prev() {
    setIdx((p) => (p - 1 + images.length) % images.length);
  }

  function next() {
    setIdx((p) => (p + 1) % images.length);
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] ring-1 ring-white/15 shadow-[0_22px_70px_rgba(0,0,0,0.28)]">
      {/* Fondo pro (fondo2 + overlay + textura) */}
      <div className="absolute inset-0">
        <img
          src={fondo2}
          alt=""
          draggable={false}
          className="h-full w-full object-cover scale-[1.06] blur-[2px]"
        />
        {/* Overlay morado para “brand” */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(122,31,162,.75)_0%,rgba(142,36,170,.62)_45%,rgba(106,27,154,.72)_100%)]" />
        {/* Textura diagonal sutil */}
        <div className="absolute inset-0 opacity-[0.16] [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.14)_0px,rgba(255,255,255,.14)_2px,transparent_2px,transparent_12px)]" />
        {/* Orbes suaves */}
        <div className="absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-[380px] w-[380px] rounded-full bg-white/10 blur-3xl" />
      </div>

      {/* ✅ AREA RESPONSIVA: se adapta a imágenes largas (sin cortar) */}
      <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
        {/* Marco glass: NO altura fija; se adapta al contenido */}
        <div className="relative rounded-[1.6rem] bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-[0_18px_55px_rgba(0,0,0,0.22)] overflow-hidden">
          {/* Contenedor con padding interno para que nunca “corte” abajo */}
          <div className="relative px-4 py-5 sm:px-6 sm:py-7 md:px-10 md:py-10">
            {/* Slides */}
            <div className="relative">
              {images.map((img, i) => {
                const active = i === idx;
                return (
                  <div
                    key={img.src}
                    className={[
                      "absolute inset-0 transition-all duration-[850ms] ease-in-out",
                      active
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-[1.01]",
                    ].join(" ")}
                  >
                    {/* Imagen completa sin recorte */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      draggable={false}
                      className="
                        w-full
                        max-h-[82vh]   /* ✅ se adapta a pantallas chicas sin cortar */
                        object-contain
                        rounded-2xl
                      "
                    />
                  </div>
                );
              })}

              {/* ✅ truco: altura dinámica basada en viewport para que el contenedor siempre tenga alto */}
              <div className="w-full max-h-[82vh] opacity-0 pointer-events-none">
                <img
                  src={images[idx]?.src}
                  alt=""
                  className="w-full max-h-[82vh] object-contain"
                />
              </div>
            </div>
          </div>

          {/* Controles */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-md"
              >
                <span className="text-2xl leading-none">‹</span>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 grid h-11 w-11 place-items-center rounded-full bg-white/85 hover:bg-white text-slate-900 shadow-md"
              >
                <span className="text-2xl leading-none">›</span>
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ir a imagen ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={[
                      "h-2.5 w-2.5 rounded-full transition",
                      i === idx ? "bg-white" : "bg-white/40",
                    ].join(" ")}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProgramasPage() {
  const images = useMemo(
    () => [
      { src: cartel1, alt: "Programa 1" },
      { src: cartel2, alt: "Programa 2" },
      { src: cartel3, alt: "Programa 3" },
      { src: cartel4, alt: "Programa 4" },
      { src: cartel5, alt: "Programa 5" },
      { src: cartel6, alt: "Programa 6" },
    ],
    []
  );

  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-[#efe9f8] py-8 text-center">
        <div className="page-title">PROGRAMAS</div>
      </section>

      <section className="card p-8 md:p-10">
        <h2 className="section-title">Programas y acciones</h2>
        <p className="mt-6 text-lg text-slate-700">
          Aquí mostraremos programas del IMMA (por ahora es contenido mock).
        </p>

        {/* ✅ Carrusel que se adapta al tamaño de imágenes largas */}
        <div className="mt-8 mx-auto max-w-7xl">
          <Carousel images={images} intervalMs={5500} />
        </div>
      </section>

      <section className="rounded-3xl bg-imma-700 text-white p-8 md:p-10">
        <div className="text-3xl md:text-4xl font-black uppercase tracking-wide">
          ¿Te interesa un taller?
        </div>
        <p className="mt-3 text-white/90 text-lg max-w-3xl">
          Después agregamos registro/solicitud (por ahora solo frontend).
        </p>

        <div className="mt-6">
          <Link
            to="/servicios"
            className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-base font-bold transition bg-white text-imma-800 hover:bg-violet-50"
          >
            Ver servicios relacionados
          </Link>
        </div>
      </section>
    </div>
  );
}
