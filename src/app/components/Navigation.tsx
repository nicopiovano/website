import { Link, useLocation } from "react-router";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "./ui/utils";
import { FINAL_CTA, NAV_LINKS } from "@/data/portfolio";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [glowing, setGlowing] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setGlowing(true);
      setTimeout(() => setGlowing(false), 600);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const navClassName = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b",
    scrolled
      ? "bg-card/95 backdrop-blur-xl border-border shadow-lg shadow-black/10"
      : "bg-card/80 backdrop-blur-md border-border",
  );

  return (
    <nav className={navClassName} role="navigation" aria-label="Principal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-[72px]">
          {/* Logo */}
          <Link
            to="/"
            className="text-lg font-semibold tracking-tight text-foreground hover:opacity-90 transition-opacity"
            aria-label="Ir al inicio"
          >
            <span className="text-[var(--accent-blue)]">&lt;</span>
            Dev
            <span className="text-[var(--accent-purple)]">/&gt;</span>
          </Link>

          {/* Desktop: links + CTA */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                  isActive(link.path)
                    ? "text-[var(--accent-blue)] bg-[var(--accent-blue)]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.label}
                {isActive(link.path) && (
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)]"
                    aria-hidden
                  />
                )}
              </Link>
            ))}
            <a
              href="/Nicolás_Piovano_Sr_Fullstack.pdf"
              download
              className="ml-2 px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200"
            >
              Curriculum
            </a>

            <Link
              to="/contacto"
              className={cn(
                "ml-2 inline-flex items-center px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 transition-all duration-700",
                glowing
                  ? "scale-105 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                  : "scale-100 drop-shadow-[0_0_6px_rgba(59,130,246,0.2)]",
              )}
            >
              Contactar
            </Link>
          </div>

          {/* Mobile: menu button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-lg text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-nav"
          className={cn(
            "md:hidden overflow-hidden transition-all duration-200 ease-out",
            isOpen ? "max-h-[320px] opacity-100 pb-4" : "max-h-0 opacity-0",
          )}
          role="region"
          aria-label="Menú de navegación móvil"
        >
          <div className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive(link.path)
                    ? "text-[var(--accent-blue)] bg-[var(--accent-blue)]/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/Nicolás_Piovano_Sr_Fullstack.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-4 py-3 rounded-lg text-sm font-medium text-center text-muted-foreground hover:bg-accent"
            >
              Curriculum
            </a>
            <Link
              to="/contacto"
              onClick={() => setIsOpen(false)}
              className="mt-2 mx-4 py-3 rounded-xl bg-[var(--accent-blue)] text-white text-sm font-semibold text-center hover:bg-[var(--accent-blue)]/90 transition-colors"
            >
              Contactar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
