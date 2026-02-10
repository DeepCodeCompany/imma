import { NavLink } from "react-router-dom";
import logoImma from "../../assets/LOGO-IMMA-PRINCIPAL.png";
import logoCompacto from "../../assets/LOGO-IMMA-COMPACTO.png";

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
  return (
    <header className="w-full">
      {/* BARRA GRIS DEL MENÚ (FIJA SIEMPRE) */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#E6E6EF] border-b border-slate-300 shadow-sm">
        <div className="container-app">
          <div className="flex items-center justify-between gap-4 py-3">
            {/* IZQUIERDA: LOGO COMPACTO */}
            <div className="flex items-center gap-4">
              <NavLink to="/" className="flex items-center gap-3">
                <img
                  src={logoCompacto}
                  alt="IMMA"
                  className="h-10 w-auto md:h-11 object-contain"
                />
              </NavLink>

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

                    {idx !== links.length - 1 && (
                      <span className="mx-1 h-5 w-px bg-slate-400/70" />
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* DERECHA: REDES */}
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

      {/* ESPACIADOR para que el contenido no quede debajo del menú fijo */}
      <div className="h-[60px]" />

      {/* BANNER MORADO GRANDE */}
      <div
        className="min-h-[260px] md:min-h-[340px] lg:min-h-[380px]"
        style={{
          backgroundImage:
            "radial-gradient(1200px 300px at 50% 20%, rgba(255,255,255,.10), rgba(255,255,255,0)), linear-gradient(135deg, #7a1fa2 0%, #8e24aa 45%, #6a1b9a 100%), repeating-linear-gradient(45deg, rgba(255,255,255,.05) 0px, rgba(255,255,255,.05) 2px, rgba(0,0,0,0) 2px, rgba(0,0,0,0) 10px)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-app py-10 md:py-12">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Logo grande centrado (sin placa blanca, para PNG transparente) */}
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
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
