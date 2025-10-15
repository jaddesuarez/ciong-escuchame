# Guía de Despliegue

## Despliegue en Vercel

1. Empuja tu código a GitHub:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. Visita [vercel.com](https://vercel.com) e importa tu repositorio

3. Vercel detectará automáticamente que es un proyecto Astro

4. ¡Haz clic en Deploy!

## Despliegue en Netlify

1. Construye el proyecto:
   ```bash
   npm run build
   ```

2. Arrastra la carpeta `dist` a [netlify.com/drop](https://app.netlify.com/drop)

O usa Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## Despliegue en Cloudflare Pages

1. Empuja tu código a GitHub

2. Ve a [Cloudflare Pages](https://pages.cloudflare.com/)

3. Conecta tu repositorio

4. Configura:
   - Build command: `npm run build`
   - Build output directory: `dist`

## Variables de Entorno

Si necesitas configurar variables de entorno, créalas en tu plataforma de hosting:

- `PUBLIC_CONTACT_EMAIL`: Email de contacto
- `PUBLIC_ANALYTICS_ID`: ID de Google Analytics (opcional)

## Optimización para Producción

El proyecto ya está optimizado para producción con:
- ✅ Minificación automática de CSS y JS
- ✅ Compresión de imágenes
- ✅ Lazy loading de componentes
- ✅ Fonts optimizados
- ✅ SEO meta tags

## Checklist Pre-Despliegue

- [ ] Actualizar URLs de las redes sociales en `Footer.astro`
- [ ] Agregar email real en `ContactSection.astro`
- [ ] Subir logos reales en `LogosSection.astro`
- [ ] Agregar imágenes/videos en `FeatureSection.astro`
- [ ] Configurar Google Analytics (opcional)
- [ ] Probar en diferentes navegadores
- [ ] Verificar responsiveness en mobile
- [ ] Revisar accesibilidad con Lighthouse

## Monitoreo Post-Despliegue

Después del despliegue, monitorea:
- Tiempos de carga (objetivo: <3s)
- Core Web Vitals
- Errores en consola
- Formularios de contacto funcionando

## Actualizaciones

Para actualizar el sitio:
1. Haz cambios en tu código local
2. Prueba con `npm run dev`
3. Haz commit y push
4. El despliegue será automático en Vercel/Netlify/Cloudflare

