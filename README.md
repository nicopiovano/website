# Porfolio — Nicolás Piovano

Sitio web personal / portfolio de **Nicolás Piovano**, desarrollador web fullstack. Presenta servicios, proyectos, experiencia y canal de contacto.

## Stack

- **Runtime:** React 18 + TypeScript
- **Build:** Vite 6
- **Estilos:** Tailwind CSS 4
- **UI:** Radix UI, Lucide React, componentes con CVA + Tailwind Merge
- **Routing:** React Router 7
- **Animaciones:** Motion

## Estructura del proyecto

```
website/
├── index.html
├── src/
│   ├── main.tsx              # Entry point
│   ├── app/
│   │   ├── App.tsx            # Router provider
│   │   ├── routes.tsx         # Rutas y layout
│   │   ├── components/        # Layout, Navigation, Footer, UI
│   │   └── pages/             # Home, Portfolio, Experiencia, Sobre mí, Contacto
│   ├── data/
│   │   └── portfolio.ts       # Contenido (textos, proyectos, experiencia)
│   └── styles/                # theme, fonts, index.css
├── vite.config.ts
├── tsconfig.json
└── package.json
```

El contenido visible (textos, enlaces, proyectos, experiencia) está centralizado en `src/data/portfolio.ts` para facilitar cambios sin tocar componentes.

## Scripts

| Comando   | Descripción                |
|----------|----------------------------|
| `npm run dev`   | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción        |

## Requisitos

- Node.js (recomendado LTS)
- npm (o pnpm según `package.json`)

## Cómo ejecutar

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build para producción
npm run build
```

Tras `npm run dev`, la app suele estar en `http://localhost:5173`.

## Rutas

| Ruta          | Página     |
|---------------|------------|
| `/`           | Inicio     |
| `/portfolio`   | Proyectos  |
| `/experiencia` | Experiencia |
| `/sobre-mi`   | Sobre mí   |
| `/contacto`   | Contacto   |

## Convenciones

- **Archivos:** kebab-case para componentes, PascalCase para clases
- **Variables:** camelCase en TS/JS
- **Alias:** `@/` apunta a `src/` (configurado en `tsconfig.json` y `vite.config.ts`)

## Licencia

Proyecto privado. Uso según acuerdo con el autor.
