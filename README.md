# 🦷 Perfección Dental

Plataforma educativa dental migrada de HTML/CSS/JS a Astro. Diseñada con componentes reutilizables, sidebar responsive y diseño moderno. Incluye recursos descargables en PDF y presentaciones interactivas sobre salud bucal.

---

## 📋 Descripción

**Perfección Dental** es un sitio web educativo orientado a profesionales y pacientes de odontología. El proyecto nació como una página estática en HTML/CSS/JS y fue completamente migrado a **Astro** con el objetivo de mejorar la arquitectura, la mantenibilidad y la experiencia de usuario.

El sitio ofrece:
- Contenido educativo sobre hábitos de higiene bucal y especialización odontológica
- Biblioteca de documentos PDF descargables
- Acceso a presentaciones interactivas de Canva
- Diseño moderno, minimalista y completamente responsive

---

## 🚀 Tecnologías

| Tecnología | Uso |
|---|---|
| [Astro](https://astro.build/) | Framework principal |
| [Tailwind CSS](https://tailwindcss.com/) | Estilos utilitarios |
| [Flowbite](https://flowbite.com/) | Componentes UI |
| HTML / CSS / JavaScript | Base y lógica del cliente |

---

## 📁 Estructura del Proyecto

```
dental-education-site/
│
├── legacy/                     # Versión original en HTML/CSS/JS
│   ├── index.html
│   ├── documentos.html
│   ├── videos.html
│   ├── css/
│   └── js/
│
└── dental-education-astro/     # Versión migrada a Astro
    ├── public/
    │   ├── img/                # Imágenes del sitio
    │   ├── doc/                # Documentos PDF
    │   └── favicon.ico
    │
    └── src/
        ├── components/
        │   ├── icon/           # Íconos SVG como componentes
        │   │   ├── Book.astro
        │   │   ├── Home.astro
        │   │   ├── Pdf.astro
        │   │   ├── Presentation.astro
        │   │   ├── School.astro
        │   │   └── Tooth.astro
        │   ├── Banner.astro    # Banner reutilizable con slots
        │   ├── Card.astro      # Cards informativas del inicio
        │   ├── CardText.astro  # Texto de cada card
        │   ├── Footer.astro    # Footer global
        │   ├── Header.astro    # Header con hamburguesa y page indicator
        │   ├── Recurso.astro   # Sección de recursos (docs + clases)
        │   ├── RecursoCard.astro # Card de recurso con lógica dinámica
        │   └── Sidebar.astro   # Menú lateral responsive
        │
        ├── layouts/
        │   └── Layout.astro    # Layout global con Header, Sidebar y Footer
        │
        ├── pages/
        │   ├── index.astro     # Página de inicio
        │   └── recursos.astro  # Página de recursos
        │
        └── styles/
            └── global.css      # Estilos globales y responsive
```

---

## ✨ Características Principales

- **Componentes reutilizables** — Header, Sidebar, Footer y Cards compartidos entre páginas mediante `Layout.astro`
- **Sidebar responsive** — Oculto en móvil, con toggle mediante la hamburguesa. Se expande en escritorio
- **Detección dinámica de tipo de recurso** — `RecursoCard` detecta automáticamente si el enlace es un PDF local o una presentación externa y ajusta el ícono y el botón
- **Documentos PDF con metadatos** — PDFs generados con título, autor y descripción correctamente configurados
- **SEO y Open Graph** — Metadatos configurados para mejorar el posicionamiento y la vista previa en redes sociales
- **Diseño moderno** — Paleta de colores consistente en azul `#1783db` con fondo oscuro en header y sidebar

---

## 🗂️ Historial de Versiones

| Versión | Descripción |
|---|---|
| `v1 - legacy` | Sitio estático original en HTML, CSS y JavaScript puro |
| `v2 - astro` | Migración completa a Astro con mejoras de diseño, responsive y componentes |

---

## 👨‍💻 Autor

**Carlos Daniel Salcán**
- GitHub: [@carlodaniel-dev](https://github.com/carlodaniel-dev)
- Portfolio: [carlosalcan-portfolio.netlify.app](https://carlosalcan-portfolio.netlify.app)
- LinkedIn: [carlos-salcan](https://www.linkedin.com/in/carlos-salcan/)

---

© 2026 Carlos Daniel Salcán. Todos los derechos reservados.