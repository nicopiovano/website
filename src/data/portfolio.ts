/**
 * Contenido del portfolio — migrado desde website (i18n es)
 */

export const SITE = {
  name: "Nicolás Piovano",
  nameShort: "Nico",
  role: "Desarrollador",
  roleFull: "Desarrollador Web Fullstack",
  subtitle: "Freelancer para SaaS, startups y negocios digitales.",
  badge: "Disponible para trabajar",
  cvUrl: "/Nicolás_Piovano_Sr_Fullstack.pdf",
  linkedin: "https://linkedin.com/in/nmpiovano",
  image: "/NicoPhotoMini.png",
  imageAbout: "/NicoPhoto.png",
} as const;

export const NAV_LINKS = [
  { path: "/", label: "Inicio" },
  { path: "/portfolio", label: "Proyectos" },
  { path: "/experiencia", label: "Experiencia" },
  { path: "/sobre-mi", label: "Sobre mí" },
] as const;

export const HERO = {
  headline1: "Llevo tu idea al alcance de todos.",
  // headline2: "Yo la transformo en algo real.",
  subheadline: "Disponible para nuevos proyectos",
  ctaPrimary: "Ver proyectos",
  ctaPrimaryHref: "/portfolio",
  ctaSecondary: "LinkedIn",
  ctaSecondaryHref: "https://linkedin.com/in/nmpiovano",
} as const;

export const SERVICES = {
  title: "Servicios",
  subtitle:
    "Servicios probados en proyectos reales. Claros, completos y listos para usar.",
  items: [
    {
      title: "Paneles de administración",
      description:
        "Un panel simple para gestionar ventas, usuarios, stock, contenidos o pedidos sin depender de nadie.",
    },
    {
      title: "Tiendas online",
      description:
        "Catálogo, productos, pagos y checkout optimizado. Una tienda lista para vender, con flujo de compra que reduce el abandono.",
    },
    {
      title: "Sitios web personales",
      description:
        "Porfolio, página profesional o landing personal: clara, rápida y que se vea premium.",
    },
    {
      title: "Control de finanzas",
      description:
        "Tableros para ingresos/gastos, métricas y reportes para tomar decisiones con números claros.",
    },
    {
      title: "Tu web en piloto automático",
      description: "Turnos, pagos, consultas y notificaciones en automático.",
    },
    {
      title: "Aplicaciones móviles",
      description: "Desarrollo de aplicaciones móviles para iOS y Android.",
    },
  ],
} as const;

/** Índice en SERVICES.items: 0 Paneles, 1 Tiendas online, 2 Sitios web personales, 3 Control finanzas, 4 Piloto automático, 5 Aplicaciones móviles */
export const PROJECTS = [
  {
    title: "Ecommerce de Rifas",
    serviceIndex: 1,
    problem:
      "Venta de rifas sin control de disponibilidad ni pagos integrados → sobreventa, fricción y pérdida de conversiones.",
    solution:
      "Ecommerce conectado a Mercado Pago con reserva temporal de rifas: selección de cantidad, bloqueo automático por 10 minutos y 15 minutos para completar el pago.",
    impact:
      "Cero sobreventa, control preciso del stock en tiempo real y un flujo de compra claro que maximiza la conversión.",
    image: "/projects/rifas.png",
    technologies: ["React", "Motion", "Tailwind CSS"],
    link: "https://nicolas-piovano-rifas.vercel.app",
    github: "https://github.com/nicopiovano/rifas-react",
  },
  {
    title: "Porfolio de Romina Fiorentino",
    serviceIndex: 2,
    problem:
      "CV y Linkedin no permitían explicar toda la experiencia de la Licenciada en RRHH.",
    solution:
      "Desarrollo de un porfolio personalizado para que el cliente pueda mostrar su experiencia y habilidades de manera clara y profesional.",
    impact:
      "Recurso nuevo para una cliente que quería mejorar su presencia en el mercado laboral.",
    image: "/projects/porfolio-romina-fiorentino.png",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://porfolio-romina-fiorentino.vercel.app",
    github: "https://github.com/nicopiovano/porfolio-romina-fiorentino",
  },
  {
    title: "Fulbapp",
    serviceIndex: 5,
    problem: "Siempre faltaban jugadores para completar el partido.",
    solution:
      "App para crear partidos con precio, lugar, fecha y cupos. Si alguien se baja, el reemplazante entra solo.",
    impact: "Cero llamadas para completar el equipo. El partido se llena solo.",
    image: "/projects/fulbapp.png",
    technologies: ["React", "Tailwind", "Vite"],
    link: "https://nicolas-piovano-fulbapp.vercel.app/",
    github: "https://github.com/nicopiovano/fulbapp",
  },
  {
    title: "Porfolio Trilingüe con ChatBot",
    serviceIndex: 2,
    problem:
      "Un portfolio básico y monolingüe limita alcance, credibilidad y generación de leads internacionales.",
    solution:
      "Sitio multiidioma con rutas por idioma, contenido optimizado para SEO y chat con IA integrado para atención y calificación de visitantes.",
    impact:
      "Marca profesional sólida, mayor captación de leads en distintos mercados y mejor conversión con clientes que operan en USD.",
    image: "/projects/porfolio.png",
    technologies: ["Astro", "Vite", "Tailwind CSS"],
    link: "https://nicolas-piovano-porfolio.vercel.app",
    github: "https://github.com/nicopiovano/porfolio",
  },
  {
    title: "Simulador de Decisiones Técnicas",
    serviceIndex: 4,
    problem:
      "Decisiones de stack tomadas por tendencia o intuición generan sobrecostos, deuda técnica y retrasos.",
    solution:
      "Motor de reglas que evalúa contexto del proyecto (escala, equipo, presupuesto, plazos) y devuelve recomendaciones técnicas justificadas.",
    impact:
      "Decisiones más rápidas y defendibles, alineación temprana del equipo y un criterio técnico reutilizable para proyectos futuros.",
    image: "/projects/tech-decision.png",
    technologies: ["Vue", "Vite", "Tailwind CSS"],
    link: "https://nicolas-piovano-tech-decision.vercel.app",
    github: "https://github.com/nicopiovano/tech-decision",
  },
  {
    title: "Aplicación de Finanzas Personales",
    serviceIndex: 3,
    problem:
      "Seguimiento manual y disperso de acciones, CEDEARs, bonos y dólares → errores, demoras y poca claridad sobre resultados reales.",
    solution:
      "Dashboard unificado con histórico de operaciones, control de ganancias/pérdidas y visualización por activo y período.",
    impact:
      "Visibilidad inmediata del rendimiento de la cartera, decisiones más rápidas y una base lista para escalar sin rehacer lógica ni UI.",
    image: "/projects/finanzas-app.png",
    technologies: ["Vue", "Vite", "Tailwind CSS"],
    link: "https://nicolas-piovano-finanzas-app.vercel.app/?demo",
    github: "https://github.com/nicopiovano/finanzas-app",
  },
  {
    title: "Porfolio Actualizado",
    serviceIndex: 2,
    problem:
      "Un portfolio básico y monolingüe limita alcance, credibilidad y generación de leads internacionales.",
    solution:
      "Sitio multiidioma con rutas por idioma, contenido optimizado para SEO y chat con IA integrado para atención y calificación de visitantes.",
    impact:
      "Marca profesional sólida, mayor captación de leads en distintos mercados y mejor conversión con clientes que operan en USD.",
    image: "/projects/website.png",
    technologies: ["Vue", "Vite", "Tailwind CSS"],
    link: "https://nico-piovano-porfolio.vercel.app",
    github: "https://github.com/nicopiovano/porfolio",
  },
  {
    title: "Presupuesto Gratis con IA",
    serviceIndex: 2,
    problem:
      "Generar presupuestos de manera rápida y eficiente, sin necesidad de tener conocimientos técnicos.",
    solution:
      "Hacer un simple formulario con preguntas y una IA genera un presupuesto.",
    impact:
      "Cualquier persona puede generar presupuestos para cualquier proyecto o idea.",
    image: "/projects/estimacion.png",
    technologies: ["Vue", "Vite", "Tailwind CSS"],
    link: "https://nico-piovano-estimacion.vercel.app",
    github: "https://github.com/nicopiovano/estimacion",
  },
] as const;

export const EXPERIENCE = [
  {
    date: "Ago. 2024 - Actualmente",
    title: "Desarrollador Web Fullstack",
    company: "Servicios Computables S.A.",
    technologies: ["Vue", "Laravel", "Docker", "MySQL"],
    description:
      "Sistemas críticos para múltiples organizaciones: estabilidad, releases incrementales y mejoras continuas.",
    learnings:
      "Claridad de alcance, iteraciones y reducción de riesgos en producción.",
  },
  {
    date: "Jun. 2021 - Abr. 2023",
    title: "Desarrollador Web Fullstack",
    company: "Servicios Computables S.A.",
    technologies: ["React", "Laravel", "Docker", "MySQL"],
    description:
      "Evolución de producto y features con prioridad en performance, UX y mantenibilidad.",
    learnings: "Trabajo por objetivos y resultados medibles.",
  },
  {
    date: "Nov. 2020 - May. 2021",
    title: "Desarrollador Web Backend",
    company: "Creative Coefficient",
    technologies: ["Prestashop", "React", "Docker"],
    description:
      "E-commerce internacional con estándares, plazos y comunicación en inglés.",
    learnings: "Entrega bajo presión con calidad y alineación constante.",
  },
  {
    date: "Dic. 2018 - Nov. 2020",
    title: "Desarrollador Web Fullstack",
    company: "CNRT (Ministerio de Transporte)",
    technologies: ["Symfony", "AngularJS", "Angular", "MySQL"],
    description:
      "Aplicaciones de alta demanda y datos sensibles: calidad, seguridad y rendimiento.",
    learnings: "Base sólida en arquitectura, datos y optimización.",
  },
] as const;

export const ABOUT = {
  title: "Sobre mí",
  intro: [
    "Soy Nico. Trabajo con founders y equipos que necesitan un producto web funcional, escalable y que se pueda mantener.",
    "Defino alcance, priorizo orden y objetivos, y entrego en iteraciones cortas.",
  ],
  paragraphs: [
    {
      before: "Programo desde 2016. ",
      strong: "Full-stack con foco en producto:",
      after: " me involucro desde la idea hasta el que esté todo funcionando.",
    },
    {
      before:
        "Viví y trabajé en varios países de Latinoamérica, lo que me dio ",
      strong: "adaptabilidad real",
      after: " para trabajar con equipos y contextos muy distintos.",
    },
    {
      before: "Me muevo bien tanto ",
      strong: "trabajando solo como siendo parte de un equipo.",
      after:
        " Me comunico con claridad, dejo expectativas por escrito y entrego código mantenible.",
    },
    {
      before: "Hoy busco proyectos donde pueda ",
      strong: "construir algo que importe",
      after: ", ya sea como freelance o sumándome a un equipo.",
    },
  ],
  values: [
    {
      title: "Código limpio",
      description:
        "Código limpio, mantenible y bien documentado siguiendo las mejores prácticas de la industria.",
    },
    {
      title: "Innovación",
      description:
        "Constantemente aprendiendo nuevas tecnologías y aplicando soluciones innovadoras.",
    },
    {
      title: "Colaboración",
      description: "Trabajo efectivo en equipo y comunicación clara.",
    },
    {
      title: "Resultados",
      description:
        "Enfoque orientado a objetivos, cumpliendo plazos y superando expectativas.",
    },
  ],
  stats: [
    { number: "7+", label: "Años de Experiencia" },
    { number: "12+", label: "Proyectos Completados" },
    { number: "4", label: "Empresas y Clientes" },
  ],
} as const;

export const FINAL_CTA = {
  title: "¿Querés lanzar o mejorar tu producto este mes?",
  text: "Contame qué querés lanzar, para quién y tu timeline; te respondo con propuesta + estimación en 24h.",
  primaryLabel: ["LinkedIn", "WhatsApp"],
  primaryHref: [
    "https://linkedin.com/in/nmpiovano",
    "https://wa.me/5491170592784?text=Hola%20Nico%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20con%20vos.",
  ],
  hint: "Trabajo en USD con clientes internacionales y nacionales.",
} as const;

export const FOOTER = {
  developed: "Desarrollado con",
  downloadCV: "Descarga CV 2026",
  tagline:
    "Construyo sistemas que generan ingresos con foco en performance, UX y mantenibilidad.",
} as const;
