import { Code2, Rocket, Users, Target } from "lucide-react";
import { Card } from "../components/ui/card";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ABOUT, SITE } from "@/data/portfolio";

const VALUE_ICONS = [Code2, Rocket, Users, Target];

export function About() {
  const values = ABOUT.values;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
            {ABOUT.title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {ABOUT.intro[0]}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <ImageWithFallback
                src={SITE.imageAbout}
                alt={`${SITE.name} - Desarrollador Web`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {ABOUT.intro[1]}
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {ABOUT.paragraphs.map((para, i) => (
                  <p key={i}>
                    {para.before}
                    <strong className="text-foreground">{para.strong}</strong>
                    {para.after}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-24">
          {ABOUT.stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center border-border">
              <div
                className="text-4xl mb-2"
                style={{ fontWeight: 700, color: "var(--accent-blue)" }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            Mis Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = VALUE_ICONS[index] ?? Code2;
              return (
                <Card
                  key={index}
                  className="p-6 border-border hover:border-[var(--accent-blue)]/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-blue)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[var(--accent-blue)]" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2" style={{ fontWeight: 600 }}>
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
