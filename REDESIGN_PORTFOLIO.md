# Rediseño incremental del portfolio — Propuesta UX/UI

## 1. Diagnóstico rápido del sitio

**Stack actual:** React + React Router, Tailwind CSS v4, tema oscuro con variables CSS (oklch), componentes shadcn/ui.

**Estructura:**
- **Layout:** `Layout.tsx` con `Navigation` fija + `Outlet`. Sin footer global.
- **Páginas:** Home (hero + servicios + CTA), Experiencia, Portfolio, Sobre Mí, Contacto.
- **Navegación:** 5 links en fila (Inicio, Experiencia, Portfolio, Sobre Mí, Contacto). Menú hamburguesa en móvil.
- **Identidad:** Logo `<Dev/>` con acentos azul/púrpura. Paleta blue/purple/cyan en tema oscuro.

**Fortalezas:**
- Tema oscuro coherente y variables bien definidas.
- Contenido claro (servicios, proyectos, experiencia).
- Uso de `backdrop-blur` en navbar y estructura responsive.

**Debilidades detectadas:**
- Navbar genérico: sin CTA destacado, sin cambio al scroll, links sin jerarquía.
- Sin tipografía explícita (fonts.css vacío) → se usa la del sistema.
- Footer solo implícito en Contacto; no hay cierre global.
- Hero correcto pero sin elemento visual fuerte (avatar/ilustración).
- Cards de proyectos sin badges claros de estado (live/demo/code).
- Stack tecnológico en Experience es solo texto, poco escaneable.

---

## 2. Problemas detectados en el navbar

| Problema | Impacto |
|----------|---------|
| **Sin CTA principal** | Contacto queda escondido entre 5 links; no hay jerarquía de acción. |
| **Orden de links poco orientado a conversión** | "Inicio → Experiencia → Portfolio → Sobre Mí → Contacto" no prioriza "qué quiero que haga el visitante". |
| **Altura fija (h-16)** | En desktop puede sentirse bajo; en móvil el menú desplegable es básico. |
| **Sin feedback al scroll** | El navbar no cambia al hacer scroll (sombra, fondo más sólido, etc.). |
| **Links sin indicador de sección activa visible** | Solo cambio de color; no hay subrayado ni pill. |
| **Hover genérico** | `hover:bg-accent` poco distintivo; no hay transición de peso o escala. |
| **Logo sin enlace visual a "inicio"** | Funciona pero no refuerza que es el home. |
| **Mobile:** menú que solo muestra links | Sin CTA destacado ni animación de apertura/cierre. |

---

## 3. Propuesta de nuevo navbar

### Estructura de navegación ideal

```
[ Logo ]     [ Inicio ] [ Experiencia ] [ Portfolio ] [ Sobre mí ]     [ Contactar ]
     ↑                    Links secundarios (texto)                          ↑
     |                                                                  CTA principal
     Identidad                                                          (botón sólido)
```

**Orden recomendado:** Inicio → Experiencia → Portfolio → Sobre Mí → **Contactar** (como botón CTA).

**Jerarquía:**
- **Primario:** "Contactar" o "Trabajar conmigo" — botón con color de acento, siempre visible.
- **Secundario:** resto de links — texto con hover y estado activo claro.

### Especificaciones

| Elemento | Propuesta |
|----------|-----------|
| **Logo** | Izquierda, mismo concepto `<Dev/>`, tamaño ~1.25rem, font-semibold. En móvil puede ir solo icono o texto corto. |
| **Links** | `gap-6` o `gap-8` entre items. `text-sm` o `text-base`, `font-medium` en activo. |
| **CTA** | Botón "Contactar" o "Trabajar conmigo": `rounded-lg` o `rounded-xl`, `px-5 py-2.5`, bg accent (azul), hover más oscuro. |
| **Altura** | `h-16` (64px) o `h-[72px]` en desktop para más presencia. |
| **Sticky** | Mantener `fixed top-0 left-0 right-0 z-50`. |
| **Scroll** | Al `scrollY > 48`: navbar con fondo más opaco y/o `shadow-lg` para separar del contenido. |
| **Activo** | Subrayado con color de acento o "pill" detrás del texto (border-radius). |
| **Hover links** | Transición 200ms, color hacia `--accent-blue` o `--foreground`, opcional `scale-[1.02]`. |

### Comportamiento al scroll

- **Arriba (scroll &lt; 48px):** `bg-card/80 backdrop-blur-md border-b border-border` (actual).
- **Tras scroll:** `bg-card/95` o `bg-background/95`, `backdrop-blur-xl`, `shadow-lg shadow-black/5` (o equivalente oscuro).

### Mobile

- Mismo orden: links + CTA al final.
- CTA en formato botón dentro del drawer.
- Transición: `animate-in slide-in-from-top-2` (o similar) para el menú desplegable.
- Cerrar al hacer clic en un link o fuera.

---

## 4. Cambios visuales recomendados

### 4.1 Paleta de colores (refresh)

Manteniendo la identidad azul/púrpura, con más contraste y claridad:

| Uso | HEX | Tailwind / CSS |
|-----|-----|----------------|
| **Primario** | `#6366f1` | `--primary` / indigo-500 |
| **Secundario** | `#8b5cf6` | `--accent-purple` / violet-500 |
| **Acento** | `#22d3ee` | `--accent-cyan` / cyan-400 |
| **Fondo** | `#0a0a0f` | `--background` (actual) |
| **Superficie** | `#13131a` | `--card` (actual) |
| **Superficie elevada** | `#1a1a24` | Nueva: `--surface-elevated` |
| **Texto** | `#e8e8f0` | `--foreground` (actual) |
| **Texto muted** | `#9a9aaa` | `--muted-foreground` (actual) |
| **Borde** | `#2a2a3a` | `--border` (actual) |
| **Hover** | `#3b3b4d` | `--accent` hover |
| **Focus ring** | `#6366f1` | `--ring` |

Accesibilidad: contraste texto/fondo ≥ 4.5:1; botones CTA con contraste suficiente.

### 4.2 Tipografía

| Rol | Fuente (Google Fonts) | Uso |
|-----|------------------------|-----|
| **Títulos** | **Plus Jakarta Sans** (600–700) | h1, h2, h3, logo |
| **Cuerpo** | **Inter** o **DM Sans** (400–500) | p, labels, botones |

Escala sugerida:

- **h1:** `text-4xl md:text-5xl lg:text-6xl`, `font-bold`, `leading-tight`
- **h2:** `text-3xl md:text-4xl`, `font-semibold`, `leading-tight`
- **h3:** `text-xl md:text-2xl`, `font-semibold`
- **body:** `text-base`, `leading-relaxed`
- **small:** `text-sm`, `text-muted-foreground`

### 4.3 Hero

- Mantener layout en una columna.
- Añadir **elemento visual derecho** (opcional): avatar en círculo con anillo en gradiente, o ilustración SVG mínima, o blob con gradiente.
- **Titular:** mantener "Hola, soy [Nombre]" con gradiente.
- **Subtítulo:** una línea que resuma valor: "Desarrollador Full Stack — aplicaciones web escalables y centradas en el usuario."
- **CTAs:** principal "Ver proyectos" (o "Ver mi trabajo"), secundario "Contactar" outline.
- Fondo: gradiente suave actual o añadir grid sutil/grid de puntos para profundidad.

### 4.4 Cards de proyectos

- **Badges de tecnologías:** ya existen; unificar estilo con `rounded-md`, `text-xs`, `font-medium`, colores por categoría (front/back/tool).
- **Estado:** badge "En vivo", "Demo" o "Código" según `link`/`github` (ej. si hay `link` → "En vivo", si solo `github` → "Código").
- **Botones:** "Ver proyecto" + icono GitHub cuando aplique; mismo estilo que en el resto del sitio.
- **Hover:** `scale-[1.02]`, `shadow-xl`, transición 200–300 ms; imagen con `scale-105` (ya lo tienes).

### 4.5 Stack tecnológico (Experience)

- **Iconos:** usar simple-icons o lucide-react por categoría (Monitor, Server, Container).
- **Agrupación:** Frontend | Backend | DevOps y herramientas en 3 columnas o 3 bloques.
- Evitar barras de progreso; opcional: "Alto / Medio" como texto o badge discreto.

### 4.6 Microinteracciones

- **Botones:** `transition-all duration-200`, hover `scale-[1.02]`, active `scale-[0.98]`.
- **Secciones:** `data-visible` con Intersection Observer; `animate-in fade-in slide-in-from-bottom-4` con delay escalonado.
- **Cards:** hover `translate-y-[-2px]` + sombra.
- **Navbar:** al scroll, transición de `bg-card/80` → `bg-card/95` y `shadow-lg` en 150 ms.

### 4.7 Footer estratégico

- Añadir **componente Footer** en `Layout.tsx` (debajo de `<Outlet />`).
- Contenido: línea de cierre ("Construyo productos digitales que resuelven problemas reales"), enlaces (Inicio, Portfolio, Contacto), iconos a GitHub/LinkedIn, botón "Contactar" o "Enviar mensaje".
- Estilo: `border-t border-border`, `py-12`, fondo `bg-card/50` o similar.

---

## 5. Cambios UX recomendados

- **Prioridad en contacto:** CTA "Contactar" siempre visible en navbar (y en footer).
- **Escaneo en 5 segundos:** Hero con titular + subtítulo + 2 CTAs; en una pasada se entiende rol, valor y siguiente paso.
- **Consistencia de rutas:** Mantener `/`, `/experiencia`, `/portfolio`, `/sobre-mi`, `/contacto`; asegurar que el CTA lleve a `/contacto`.
- **Estados activos:** En navbar, indicador claro de la página actual (subrayado o pill).
- **Mobile:** Un solo tap para abrir menú; CTA igual de visible que en desktop.
- **Accesibilidad:** `aria-current="page"` en link activo, focus visible en todos los interactivos, contraste suficiente.

---

## 6. Cambios de contenido

### 6.1 Storytelling "Sobre mí"

Versión reescrita (ejemplo) para comunicar problema, tecnologías, experiencia y tipo de proyectos:

> **Qué problema resuelvo**  
> Ayudo a equipos y empresas a llevar ideas al producto: desde el diseño hasta el código y el despliegue. Me especializo en aplicaciones web escalables, APIs claras y experiencias de usuario que convierten.
>
> **Tecnologías principales**  
> React, TypeScript, Node.js, bases de datos SQL y NoSQL, y despliegue en cloud (AWS, Vercel). Uso metodologías ágiles y trabajo tanto en equipos como en proyectos freelance de principio a fin.
>
> **Experiencia**  
> Más de 6 años desarrollando productos digitales: desde startups hasta empresas consolidadas. He liderado equipos, definido arquitecturas y entregado proyectos que generan impacto medible.
>
> **Tipo de proyectos**  
> Desarrollo Full Stack en relación de dependencia (productos corporativos, dashboards, SaaS) y proyectos freelance (web apps, e-commerce, landing pages y consultoría técnica).

### 6.2 Hero

- **Titular:** "Hola, soy [Nombre]".
- **Subtítulo:** "Desarrollador Full Stack — aplicaciones web escalables y centradas en el usuario."
- **CTAs:** "Ver mi trabajo" (→ Portfolio) y "Contactar" (→ Contacto).

---

## 7. Ejemplos de implementación

### 7.1 Navbar: HTML + Tailwind (concepto)

```tsx
// Estructura objetivo del navbar
<nav className={cn(
  "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
  scrolled ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-border" : "bg-card/80 backdrop-blur-md border-b border-border"
)}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 md:h-[72px]">
      {/* Logo */}
      <Link to="/" className="text-lg font-semibold tracking-tight ...">
        <span className="text-[var(--accent-blue)]">&lt;</span>Dev<span className="text-[var(--accent-purple)]">/&gt;</span>
      </Link>

      {/* Desktop: links + CTA */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
              isActive(link.path)
                ? "text-[var(--accent-blue)] bg-[var(--accent-blue)]/10"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            )}
            aria-current={isActive(link.path) ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contacto"
          className="ml-4 px-5 py-2.5 rounded-xl bg-[var(--accent-blue)] text-white text-sm font-semibold hover:bg-[var(--accent-blue)]/90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        >
          Contactar
        </Link>
      </div>

      {/* Mobile: hamburger + drawer con mismo CTA */}
      ...
    </div>
  </div>
</nav>
```

### 7.2 Hook para scroll en navbar

```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 48);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
}, []);
```

### 7.3 Variables de paleta en theme.css

Añadir en `:root` y `.dark` (donde aplique):

```css
--primary: #6366f1;
--accent-blue: #6366f1;
--accent-purple: #8b5cf6;
--accent-cyan: #22d3ee;
--surface-elevated: #1a1a24;
```

### 7.4 Fuentes (fonts.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --font-heading: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
}
```

En `theme.css` base:

```css
body {
  font-family: var(--font-body);
}
h1, h2, h3, h4 {
  font-family: var(--font-heading);
}
```

### 7.5 Footer mínimo en Layout

```tsx
<footer className="border-t border-border bg-card/50 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
    <p className="text-sm text-muted-foreground">Construyo productos digitales que resuelven problemas reales.</p>
    <div className="flex gap-6">
      <Link to="/">Inicio</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contacto">Contacto</Link>
    </div>
    <Link to="/contacto"><Button size="sm">Contactar</Button></Link>
  </div>
</footer>
```

---

## Resumen de prioridades

1. **Alto impacto / bajo esfuerzo:** Nuevo navbar con CTA "Contactar", estado al scroll, indicador de activo y hover claro.
2. **Alto impacto / medio esfuerzo:** Paleta y tipografía (theme + fonts.css), footer global.
3. **Medio impacto:** Hero con subtítulo y CTAs revisados, cards con badge de estado, microinteracciones en botones y navbar.
4. **Refinamiento:** Storytelling "Sobre mí", stack con iconos, animaciones de entrada en secciones.

Implementando en el repo: **Navigation.tsx** (navbar completo), **theme.css** (tokens de color/fuente), **Layout.tsx** (footer), y opcional **fonts.css** (Google Fonts).
