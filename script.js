/* ═══════════════════════════════════════════════════════
   MY ENGLISH BLOG — script.js
   JavaScript básico — menú móvil + scroll suave + año
   ✏️ Puedes agregar más funciones aquí abajo
═══════════════════════════════════════════════════════ */

// ── 1. MENÚ HAMBURGUESA (móvil) ───────────────────────
// Muestra/oculta el menú de navegación en pantallas pequeñas
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('open');        // agrega o quita la clase "open"
  hamburger.classList.toggle('active');
});

// Cierra el menú al hacer clic en cualquier enlace
nav.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    nav.classList.remove('open');
    hamburger.classList.remove('active');
  });
});


// ── 2. AÑO AUTOMÁTICO EN EL FOOTER ───────────────────
// Actualiza el año del footer automáticamente
const yearEl = document.querySelector('.site-footer');
if (yearEl) {
  const currentYear = new Date().getFullYear();
  yearEl.innerHTML = yearEl.innerHTML.replace('2025', currentYear);
}


// ── 3. SCROLL SUAVE A SECCIONES ──────────────────────
// Hace que los enlaces de navegación bajen suavemente
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


// ── 4. HIGHLIGHT DEL ENLACE ACTIVO EN EL MENÚ ────────
// Marca el enlace del menú según la sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', function () {
  let current = '';
  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(function (link) {
    link.style.color = '';
    if (link.getAttribute('href') === '#' + current) {
      link.style.color = '#39A900'; // color activo = verde SENA
    }
  });
});


/* ══════════════════════════════════════════════════════
   ✏️ AQUÍ PUEDES AGREGAR TUS PROPIAS FUNCIONES EN JS
   Ejemplo:
   - Un contador de palabras
   - Un botón "volver arriba"
   - Un filtro de posts por categoría
══════════════════════════════════════════════════════ */
