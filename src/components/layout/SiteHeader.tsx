import { NavLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import logoImma from "../../assets/LOGO-IMMA-PRINCIPAL.png";
import logoCompacto from "../../assets/LOGO-IMMA-COMPACTO.png";
import verdeImg from "../../assets/verde.png";

// ✅ Ejemplo: imágenes para el carrusel del banner
import bgHeader1 from "../../assets/fondorosa.png";
import bgHeader2 from "../../assets/fondo2.png";
import bgHeader3 from "../../assets/fondo3.png";

const links = [
  { to: "/quienes-somos", label: "¿Quiénes somos?" },
  { to: "/servicios", label: "Servicios" },
  { to: "/casas", label: "Casas de la Mujer" },
  { to: "/consejos", label: "Consejos" },
  { to: "/programas", label: "Programas" },
  { to: "/eventos", label: "Eventos" },
  { to: "/transparencia", label: "Transparencia" },
];

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full text-slate-700 hover:bg-slate-300/60 hover:text-slate-900 transition"
    >
      {children}
    </a>
  );
}

function ServiceCard({
  title,
  subtitle,
  className = "",
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[1.25rem] bg-[linear-gradient(135deg,#7a1fa2_0%,#8e24aa_45%,#6a1b9a_100%)]",
        "px-6 md:px-8 py-6 md:py-7 text-white shadow-[0_14px_35px_rgba(0,0,0,0.18)]",
        "min-h-[112px] md:min-h-[120px] flex items-center justify-center text-center",
        className,
      ].join(" ")}
    >
      <div className="leading-tight">
        <div className="text-xl md:text-3xl font-extrabold tracking-wide uppercase">
          {title}
        </div>
        {subtitle ? (
          <div className="text-xl md:text-3xl font-extrabold tracking-wide uppercase">
            {subtitle}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BannerBackgroundCarousel({
  images,
  intervalMs = 6500,
}: {
  images: string[];
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

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, i) => {
        const active = i === idx;
        return (
          <div
            key={src}
            className={[
              "absolute inset-0 transition-all duration-[1400ms] ease-in-out",
              active ? "opacity-100" : "opacity-0",
              active ? "blur-0 scale-100" : "blur-sm scale-[1.04]",
            ].join(" ")}
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(122,31,162,.78)_0%,rgba(142,36,170,.72)_45%,rgba(106,27,154,.78)_100%)]" />
            <div className="absolute inset-0 opacity-[0.16] [background-image:repeating-linear-gradient(45deg,rgba(255,255,255,.12)_0px,rgba(255,255,255,.12)_2px,transparent_2px,transparent_12px)]" />
          </div>
        );
      })}

      <div className="absolute -top-20 -left-24 h-[320px] w-[320px] rounded-full bg-white/10 blur-2xl animate-[floatSlow_10s_ease-in-out_infinite]" />
      <div className="absolute -bottom-24 -right-28 h-[380px] w-[380px] rounded-full bg-white/10 blur-2xl animate-[floatSlow_12s_ease-in-out_infinite]" />
    </div>
  );
}

export default function SiteHeader() {
  const bannerImages = useMemo(() => [bgHeader1, bgHeader2, bgHeader3], []);

  return (
    <header className="w-full">
      <style>{`
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(14px); }
        }
        @keyframes logoFloat {
          0%,100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-8px) scale(1.01); }
        }
      `}</style>

      {/* BARRA GRIS DEL MENÚ */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6EF] border-b border-slate-300 shadow-sm">
        <div className="container-app">
          <div className="flex items-center justify-between gap-4 py-3">
            <div className="flex items-center gap-4">
              <NavLink to="/" className="flex items-center gap-3">
                <img
                  src={logoCompacto}
                  alt="IMMA"
                  className="h-10 w-auto md:h-11 object-contain"
                />
              </NavLink>

              <nav className="flex flex-wrap items-center">
                {links.map((l, idx) => (
                  <div key={l.to} className="flex items-center">
                    <NavLink
                      to={l.to}
                      className={({ isActive }) =>
                        [
                          "px-4 py-2 text-sm font-semibold transition",
                          "text-slate-700 hover:text-slate-900",
                          isActive ? "underline underline-offset-4" : "",
                        ].join(" ")
                      }
                    >
                      {l.label}
                    </NavLink>

                    {idx !== links.length - 1 && (
                      <span className="mx-1 h-5 w-px bg-slate-400/70" />
                    )}
                  </div>
                ))}
              </nav>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <SocialIcon href="#" label="Facebook">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.2-1.5 1.5-1.5h1.6V5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3H10v8h3.5z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="Instagram">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm5-2.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="TikTok">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M16 3c.7 2.3 2.3 3.7 4.7 4v3.1c-1.8 0-3.4-.6-4.7-1.6V16c0 3-2.4 5.5-5.5 5.5S5 19 5 16s2.5-5.5 5.5-5.5c.4 0 .8 0 1.2.1v3.3c-.4-.2-.8-.3-1.2-.3-1.2 0-2.2 1-2.2 2.3 0 1.2 1 2.2 2.2 2.2 1.3 0 2.3-1 2.3-2.2V3h3.2z" />
                </svg>
              </SocialIcon>

              <SocialIcon href="#" label="WhatsApp">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.6-5.6c-.2-.1-1.3-.7-1.5-.8-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.3 0-.5-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2 0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.3-.6 1.5-1.1.2-.5.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" />
                </svg>
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60px]" />

      {/* BANNER */}
      <div className="relative min-h-[260px] md:min-h-[340px] lg:min-h-[380px]">
        <BannerBackgroundCarousel images={bannerImages} intervalMs={6500} />

        <div className="relative container-app py-10 md:py-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            <div className="flex justify-center">
              <div className="rounded-[2.25rem] p-2 md:p-3">
                <img
                  src={logoImma}
                  alt="IMMA"
                  className="
                    h-28 w-auto sm:h-32 md:h-52 lg:h-60 object-contain
                    drop-shadow-[0_18px_40px_rgba(0,0,0,0.35)]
                    [filter:drop-shadow(0_0_18px_rgba(255,255,255,0.25))]
                  "
                  style={{ animation: "logoFloat 6.5s ease-in-out infinite" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BLOQUE “RECUADROS” (RESPONSIVO, SIN MUJER) */}
      <section className="relative bg-white">
        <div className="-mt-10 md:-mt-16 lg:-mt-20 pb-10">
          <div className="w-full px-6 md:px-10 lg:px-14">
            <div className="relative">
              {/* títulos */}
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-2 pt-6">
                <h2 className="text-center">
                  <span
                    className="
                      block
                      text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px]
                      tracking-tight leading-[0.95]
                      text-slate-300/80
                      select-none
                    "
                  >
                    <span className="font-extrabold">¿Necesitas</span>{" "}
                    <span className="font-black">ayuda?</span>
                  </span>
                </h2>

                <h2 className="text-center">
                  <span
                    className="
                      block
                      text-[34px] sm:text-[44px] md:text-[56px] lg:text-[64px]
                      tracking-tight leading-[0.95]
                      text-slate-300/80
                      select-none
                    "
                  >
                    <span className="font-extrabold">Aquí te</span>{" "}
                    <span className="font-black">apoyamos</span>
                  </span>
                </h2>
              </div>

              {/* ✅ Grid + sticker verde (bajamos los cuadros y el sticker ya no queda arriba) */}
              <div className="mx-auto max-w-6xl relative mt-10 md:mt-14">
                {/* ✅ verde: más abajo, tocando el primer recuadro por abajo */}
                <div className="absolute -left-38 top-0 z-30 translate-y-20">
                  <img
                    src={verdeImg}
                    alt="Redes IMMA"
                    className="h-14 md:h-20 w-auto object-contain drop-shadow-[0_14px_25px_rgba(0,0,0,0.18)]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 items-stretch">
                  <ServiceCard
                    title="TRABAJO"
                    subtitle="SOCIAL"
                    className="w-full"
                  />
                  <ServiceCard
                    title="ASESORÍA"
                    subtitle="JURÍDICA"
                    className="w-full"
                  />
                  <ServiceCard
                    title="ASESORÍA"
                    subtitle="PSICOLÓGICA"
                    className="w-full"
                  />
                  <ServiceCard
                    title="ECONOMÍA"
                    subtitle="SOCIAL"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
