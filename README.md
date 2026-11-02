# Ramiro Benitez — Portfolio

Portfolio bilingüe de Ramiro Benitez, desarrollado con Next.js 14. Presenta su experiencia Full Stack, proyectos seleccionados, stack y formas de contacto.

## Diseño

La dirección visual toma referencias del sitio de [NexoWorks](https://www.nexoworks.site/): fondo carbón, tipografía editorial, tonos cálidos y verde usado con moderación. El retrato principal usa la foto original de la sección de equipo de NexoWorks. El contenido prioriza una lectura clara para reclutadores. Las imágenes de OCEANS y Camax son vistas ilustrativas basadas en sus interfaces reales, con personas y datos ficticios.

## Contenido

- Español e inglés, con preferencia guardada en el navegador.
- CV correspondiente a cada idioma en `public/cv/`.
- Proyectos destacados: OCEANS y Camax Neumáticos.
- Logos de empresas con las que trabaja NexoWorks, incluidos como archivos locales en `public/clients/`.
- Otros trabajos, experiencia, stack y enlaces de contacto.

## Desarrollo

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000` (o el puerto disponible indicado por Next.js).

## Verificación

```bash
npm run build
```

Sitio publicado en [GitHub Pages](https://ramabeni94dev.github.io/Porfilio-RMB/). El workflow de `main` configura `NEXT_PUBLIC_BASE_PATH=/Porfilio-RMB` para las imágenes y los CV.
