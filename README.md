# Escúchame - Campaña de Sensibilización sobre Pérdida Auditiva

Un sitio web moderno construido con Astro para crear conciencia sobre la pérdida auditiva y apoyar a las personas sordas.

## 🚀 Características

- ✨ Diseño moderno y responsivo basado en Figma
- 🎨 Estilos con Tailwind CSS
- ⚡ Rendimiento optimizado con Astro
- 📱 Compatible con dispositivos móviles, tablets y desktop
- ♿ Accesible y amigable para lectores de pantalla

## 🛠️ Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                          |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`           | Construye el sitio para producción en `./dist/`   |
| `npm run preview`         | Vista previa de la construcción localmente        |
| `npm run astro ...`       | Ejecuta comandos CLI como `astro add`, `astro check` |

## 🧩 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── LogosSection.astro
│   │   ├── BarriersSection.astro
│   │   ├── FeatureSection.astro
│   │   ├── ResourceCards.astro
│   │   ├── ContactSection.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## 🎨 Secciones del Sitio

1. **Hero**: Sección principal con llamada a la acción
2. **Logos**: Organizaciones colaboradoras
3. **Barreras Invisibles**: Estadísticas sobre pérdida auditiva
4. **Características**: Múltiples secciones educativas con videos
5. **Recursos**: Materiales descargables
6. **Contacto**: Formulario de contacto
7. **Footer**: Enlaces y redes sociales

## 📝 Personalización

- Los colores principales se pueden ajustar en `tailwind.config.mjs`
- Los estilos globales están en `src/styles/global.css`
- Las variables CSS están definidas en `src/layouts/Layout.astro`

## 🌐 Despliegue

El sitio puede ser desplegado en cualquier plataforma de hosting estático:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📄 Licencia

Este proyecto fue creado para la campaña de sensibilización sobre pérdida auditiva.

## 🙏 Agradecimientos

- Cooperación Internacional
- Asociación T-Oigo
- Fundación Amigos
