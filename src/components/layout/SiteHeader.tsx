import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

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

export default function SiteHeader() {
  const [logoOk, setLogoOk] = useState(true);
  const { pathname } = useLocation();

  // Cierra menú móvil al cambiar ruta
  useEffect(() => {}, [pathname]);

  return (
    <header className="w-full">
      {/* BANNER MORADO GRANDE */}
      <div
        className="min-h-[220px] md:min-h-[260px]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 300px at 50% 20%, rgba(255,255,255,.10), rgba(255,255,255,0)), linear-gradient(135deg, #7a1fa2 0%, #8e24aa 45%, #6a1b9a 100%), repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0px, rgba(255,255,255,.05) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 10px)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-app py-10 md:py-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
            {/* Logo */}
            <div className="grid place-items-center">
              <div className="rounded-3xl bg-white p-4 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                {logoOk ? (
                  <img
                    src="/assets/imma-logo.png"
                    alt="IMMA"
                    className="h-16 w-16 object-contain"
                    onError={() => setLogoOk(false)}
                  />
                ) : (
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-violet-700 text-white font-bold text-xl">
                    IM
                  </div>
                )}
              </div>
            </div>

            {/* Texto */}
            <div className="text-white drop-shadow-[0_10px_24px_rgba(0,0,0,0.45)]">
              <div className="text-base font-medium tracking-wide md:text-lg">
                INSTITUTO MUNICIPAL DE LA
              </div>
              <div className="text-3xl font-extrabold leading-tight md:text-4xl">
                MUJER DE
                <br className="hidden md:block" />
                AGUASCALIENTES
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA GRIS DEL MENÚ */}
      <div className="bg-[#E6E6EF] border-b border-slate-300">
        <div className="container-app">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* Menú */}
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

                  {/* Separador | */}
                  {idx !== links.length - 1 && (
                    <span className="mx-1 h-5 w-px bg-slate-400/70" />
                  )}
                </div>
              ))}
            </nav>

            {/* Redes (derecha) */}
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
    </header>
  );
}
