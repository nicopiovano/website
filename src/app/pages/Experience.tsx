import { Briefcase, Calendar } from "lucide-react";
import { Card } from "../components/ui/card";
import { EXPERIENCE as EXPERIENCE_DATA } from "@/data/portfolio";

export function Experience() {
  const experiences = EXPERIENCE_DATA;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
            Experiencia
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Trayectoria en desarrollo web fullstack con foco en escalabilidad,
            entregas incrementales y mejoras continuas.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-24">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[var(--accent-blue)] ring-4 ring-background" />

                <Card className="p-6 md:p-8 border-border hover:border-[var(--accent-blue)]/50 transition-all">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                      <div>
                        <h3
                          className="text-2xl mb-2"
                          style={{ fontWeight: 600 }}
                        >
                          {exp.title}
                        </h3>
                        <div
                          className="flex items-center gap-2 text-[var(--accent-blue)]"
                          style={{ fontWeight: 500 }}
                        >
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.date}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Learnings */}
                  {exp.learnings && (
                    <div className="mb-6">
                      <h4 className="text-sm mb-2" style={{ fontWeight: 600 }}>
                        Aprendizajes:
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {exp.learnings}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm mb-3" style={{ fontWeight: 600 }}>
                      Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-lg bg-accent text-sm border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Section */}
        <div className="mt-24">
          <h2 className="text-3xl mb-8" style={{ fontWeight: 700 }}>
            Stack Tecnológico
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                Frontend
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>React / Vue.js / Angular</p>
                <p>TypeScript / JavaScript</p>
                <p>Tailwind CSS / Motion</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                Backend
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Laravel / Symfony</p>
                <p>MySQL / PostgreSQL</p>
                <p>REST APIs</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg mb-4" style={{ fontWeight: 600 }}>
                DevOps & Tools
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Docker</p>
                <p>Git / Vite</p>
                <p>Astro</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
