import { Link } from "react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { FOOTER as FOOTER_CONTENT, SITE } from "@/data/portfolio";

const FOOTER_LINKS = [
  { to: "/", label: "Inicio" },
  { to: "/portfolio", label: "Proyectos" },
  { to: "/contacto", label: "Contacto" },
];

const SOCIAL = [
  { href: "https://github.com/nicopiovano", icon: Github, label: "GitHub" },
  { href: SITE.linkedin, icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-card/50 py-12 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <p className="text-sm text-muted-foreground max-w-md">
            {FOOTER_CONTENT.tagline} Si tienes un proyecto en mente, hablemos.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <nav className="flex gap-6" aria-label="Enlaces del sitio">
              {FOOTER_LINKS.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {SOCIAL.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-muted-foreground hover:text-[var(--accent-blue)] hover:bg-accent transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <a href={SITE.cvUrl} download>
              <Button
                size="sm"
                variant="outline"
                className="border-border hover:bg-accent mr-2"
              >
                {FOOTER_CONTENT.downloadCV}
              </Button>
            </a>
            <Link to="/contacto">
              <Button
                size="sm"
                className="bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contactar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
