import { useState, useEffect } from "react";
import { ArrowRight, Briefcase, Sparkles } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { SITE, HERO, SERVICES, FINAL_CTA } from "../../data/portfolio";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const headlines = [HERO.headline1, HERO.headline2];

  useEffect(() => {
    const id = setInterval(() => setHeadlineIndex((i) => (i + 1) % 2), 1700);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section — ocupa toda la pantalla inicial */}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--seagrass)]/10 via-transparent to-[var(--dusty)]/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-16">
          <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-4xl">
            <div className="flex-shrink-0">
              {/* <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[var(--accent-blue)]/30 shadow-lg">
                <ImageWithFallback
                  src={SITE.image}
                  alt={SITE.name}
                  className="w-full h-full object-cover"
                />
              </div> */}
            </div>
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border mb-6">
                <span
                  className="inline-block w-2 h-2 rounded-full bg-[var(--seagrass)] animate-blink"
                  aria-hidden
                />
                <span className="text-sm text-muted-foreground">
                  Disponible para nuevos proyectos
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl mb-6"
                style={{ fontWeight: 700, lineHeight: 1.1 }}
              >
                Hola, soy{" "}
                <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
                  {SITE.name}
                </span>
              </h1>

              <div className="relative min-h-[3.5rem] md:min-h-[4rem] mb-8">
                {headlines.map((text, i) => (
                  <h2
                    key={i}
                    className={`absolute inset-0 text-2xl md:text-3xl text-muted-foreground transition-all duration-700 ${
                      headlineIndex === i
                        ? "opacity-100 blur-0"
                        : "opacity-0 blur-sm"
                    }`}
                  >
                    {text}
                  </h2>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to={HERO.ctaPrimaryHref}>
                  <Button
                    size="lg"
                    className="bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white"
                  >
                    {HERO.ctaPrimary}
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a
                  href={HERO.ctaSecondaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-border hover:bg-accent"
                  >
                    {HERO.ctaSecondary}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontWeight: 700 }}
            >
              {SERVICES.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {SERVICES.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {SERVICES.items.map((service, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-[var(--accent-blue)]/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent-blue)]/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-5 h-5 text-[var(--accent-blue)]" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[var(--dusk)]/15 to-[var(--dusty)]/15 border border-border p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--seagrass)]/5 to-transparent" />
            <div className="relative">
              <h2
                className="text-3xl md:text-4xl mb-6"
                style={{ fontWeight: 700 }}
              >
                {FINAL_CTA.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
                {FINAL_CTA.text}
              </p>
              <p className="text-sm text-muted-foreground mb-8">
                {FINAL_CTA.hint}
              </p>
              <a
                href={FINAL_CTA.primaryHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white"
                >
                  {FINAL_CTA.primaryLabel}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
