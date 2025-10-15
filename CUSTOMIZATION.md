# Guía de Personalización

## 🎨 Cambiar Colores

Los colores principales se definen en `tailwind.config.mjs`:

```javascript
colors: {
  primary: {
    DEFAULT: '#F9D423',  // Amarillo principal
    dark: '#E6C41F',     // Amarillo oscuro
  },
  secondary: {
    DEFAULT: '#EC1C8A',  // Rosa/Magenta
  }
}
```

También hay variables CSS en `src/layouts/Layout.astro`:

```css
:root {
  --color-primary: #F9D423;
  --color-primary-dark: #E6C41F;
  --color-secondary: #EC1C8A;
  --color-text: #1F2937;
  --color-text-light: #6B7280;
}
```

## 📝 Actualizar Contenido

### Hero Section
Edita `src/components/Hero.astro`:
- Título principal
- Descripción
- Texto del botón

### Estadísticas
Edita `src/components/BarriersSection.astro`:
- Números y textos de cada estadística
- Añadir/quitar tarjetas según necesites

### Secciones de Características
Edita `src/pages/index.astro`:
```astro
<FeatureSection 
  title="Tu título aquí"
  description="Tu descripción aquí"
  imageUrl="/tu-imagen.jpg"  // Opcional
  imageAlt="Descripción de la imagen"
  reverse={true}  // Para alternar el diseño
/>
```

### Tarjetas de Recursos
Edita `src/components/ResourceCards.astro`:
- Títulos de las tarjetas
- Descripciones
- Enlaces de descarga
- Colores de fondo

### Contacto
Edita `src/components/ContactSection.astro`:
- Título de la sección
- Texto descriptivo
- Email de contacto

### Footer
Edita `src/components/Footer.astro`:
- Enlaces de navegación
- URLs de redes sociales
- Texto del copyright

## 🖼️ Agregar Imágenes

1. Coloca tus imágenes en la carpeta `public/images/`

2. Referéncialas en los componentes:
```astro
<FeatureSection 
  imageUrl="/images/mi-imagen.jpg"
  imageAlt="Descripción de mi imagen"
/>
```

3. Para el Hero, edita `src/components/Hero.astro`:
```astro
<img src="/images/hero-illustration.svg" alt="Ilustración" />
```

## 🎬 Agregar Videos

Puedes usar videos de YouTube, Vimeo o locales:

### YouTube/Vimeo
```astro
<iframe 
  src="https://www.youtube.com/embed/VIDEO_ID"
  class="w-full h-full rounded-2xl"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>
```

### Video Local
```astro
<video 
  class="w-full h-full rounded-2xl"
  controls
  poster="/images/video-poster.jpg"
>
  <source src="/videos/mi-video.mp4" type="video/mp4" />
</video>
```

## 🔤 Cambiar Fuentes

Las fuentes se cargan en `src/layouts/Layout.astro`:

```html
<link href="https://fonts.googleapis.com/css2?family=TuFuente:wght@400;700&display=swap" rel="stylesheet">
```

Y se configuran en `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['TuFuente', 'system-ui', 'sans-serif'],
}
```

## 📱 Ajustar Responsive

Usa las clases de Tailwind para diferentes tamaños:

```astro
<div class="
  text-2xl           <!-- móvil -->
  md:text-4xl        <!-- tablet -->
  lg:text-6xl        <!-- desktop -->
">
  Tu texto
</div>
```

Breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## 🔗 Agregar Nuevas Páginas

1. Crea un nuevo archivo en `src/pages/`:
```astro
---
// src/pages/about.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Sobre Nosotros">
  <div class="pt-32 px-4">
    <h1>Sobre Nosotros</h1>
    <!-- Tu contenido -->
  </div>
</Layout>
```

2. Añade enlaces en la navegación:
```astro
<a href="/about">Sobre Nosotros</a>
```

## 🎭 Agregar Animaciones

Instala una librería de animaciones:

```bash
npm install @astrojs/motion
```

O usa CSS simple:

```css
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

## 📊 Agregar Analytics

### Google Analytics

En `src/layouts/Layout.astro`, añade en el `<head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Internacionalización (i18n)

Para agregar múltiples idiomas:

1. Crea carpetas por idioma en `src/pages/`:
```
src/pages/
  index.astro (español)
  en/
    index.astro (inglés)
```

2. Crea archivos de traducción en `src/i18n/`:
```javascript
// src/i18n/es.json
{
  "hero.title": "ESCÚCHAME",
  "hero.description": "Campaña para..."
}

// src/i18n/en.json
{
  "hero.title": "LISTEN TO ME",
  "hero.description": "Campaign to..."
}
```

3. Usa las traducciones en tus componentes

