import { Mail, Linkedin, Github } from "lucide-react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useState } from "react";
import { SITE } from "@/data/portfolio";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te responderé pronto.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "LinkedIn",
      value: "Contacto principal",
      link: SITE.linkedin,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "nicopiovano",
      link: "https://github.com/nicopiovano",
      color: "var(--accent-blue)",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: SITE.name,
      link: SITE.linkedin,
      color: "var(--accent-purple)",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>
            Trabajemos Juntos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tenés un proyecto en mente? Estoy disponible para colaboraciones
            tanto en relación de dependencia como freelance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-border">
              <h2 className="text-2xl mb-6" style={{ fontWeight: 600 }}>
                Envíame un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Nombre
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      required
                      className="bg-background border-border"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="tu@email.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2">
                    Asunto
                  </label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="¿De qué se trata tu proyecto?"
                    required
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                    rows={6}
                    className="bg-background border-border resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Profile Card */}
            <Card className="p-6 border-border text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[var(--accent-blue)]/20">
                <ImageWithFallback
                  src={SITE.imageAbout}
                  alt={SITE.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-1" style={{ fontWeight: 600 }}>
                {SITE.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {SITE.roleFull}
              </p>
              <p className="text-sm text-muted-foreground">
                Contame qué querés lanzar; te respondo con propuesta +
                estimación en 24h.
              </p>
            </Card>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>
                Información de Contacto
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="p-4 border-border">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="flex items-start gap-3 hover:text-[var(--accent-blue)] transition-colors"
                        >
                          <Icon className="w-5 h-5 mt-0.5 text-[var(--accent-blue)]" />
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {info.label}
                            </div>
                            <div>{info.value}</div>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">
                          <Icon className="w-5 h-5 mt-0.5 text-[var(--accent-blue)]" />
                          <div>
                            <div className="text-sm text-muted-foreground mb-1">
                              {info.label}
                            </div>
                            <div>{info.value}</div>
                          </div>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>
                Redes Sociales
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-[var(--accent-blue)]/50 transition-all group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${social.color}15` }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{ color: social.color }}
                        />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">
                          {social.label}
                        </div>
                        <div className="group-hover:text-[var(--accent-blue)] transition-colors">
                          {social.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Card className="p-12 border-border bg-gradient-to-br from-[var(--accent-blue)]/5 to-[var(--accent-purple)]/5">
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ fontWeight: 700 }}
            >
              ¿Prefieres una llamada rápida?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Agenda una videollamada de 30 minutos para discutir tu proyecto
              sin compromiso
            </p>
            <Button
              size="lg"
              className="bg-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/90 text-white"
            >
              Agendar Reunión
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
