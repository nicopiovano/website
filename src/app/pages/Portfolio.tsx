import { ExternalLink } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PROJECTS, SERVICES } from "../../data/portfolio";

export function Portfolio() {
  const filteredProjects = PROJECTS;

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
            Proyectos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Una selección de proyectos que demuestran mi experiencia en
            desarrollo web, con foco en productos que generan valor.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:border-[var(--accent-blue)]/50 transition-all flex flex-col h-full"
            >
              {/* Image */}
                            <div className="relative aspect-video overflow-hidden bg-muted shrink-0">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 min-h-0">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl" style={{ fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-blue)]/10 text-[var(--accent-blue)] shrink-0">
                    {SERVICES.items[project.serviceIndex].title}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.impact}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded bg-accent text-xs border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links — siempre abajo de la card */}
                <div className="flex gap-3 mt-auto pt-2">
                  {project.link && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-border hover:bg-accent"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver
                      </a>
                    </Button>
                  )}
                  {/* {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:bg-accent"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                  )} */}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
