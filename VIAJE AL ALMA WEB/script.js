document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal para secciones con IntersectionObserver
  const reveals = document.querySelectorAll('.scroll-reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');

        // Aparece íconos si están dentro de esta sección
        const icons = entry.target.querySelectorAll('.icono-item');
        icons.forEach(icon => icon.classList.add('revealed'));

        // Animar ítems de lista uno a uno SOLO en sección #incluye
        if (entry.target.id === 'incluye') {
          const items = entry.target.querySelectorAll('ul li');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('revealed');
            }, i * 300); // 300ms delay entre cada ítem
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));

  // Carrusel de fondo con animación mejorada
  const carrusel = document.querySelector('.carrusel-fondo');
  const imagenes = document.querySelectorAll('.carrusel-fondo .imagen');
  let currentIndex = 0;

  if (carrusel && imagenes.length > 0) {
    carrusel.style.visibility = 'visible';
    imagenes.forEach((img, i) => {
      img.classList.toggle('active', i === 0);
    });

    setInterval(() => {
      const currentImage = imagenes[currentIndex];
      const nextIndex = (currentIndex + 1) % imagenes.length;
      const nextImage = imagenes[nextIndex];

      // Agrega clase de salida a la actual
      currentImage.classList.remove('active');
      currentImage.classList.add('fade-out');

      // Activa la siguiente imagen con clase de entrada
      nextImage.classList.add('fade-in');
      nextImage.classList.add('active');

      // Limpia clases anteriores después de la transición
      setTimeout(() => {
        currentImage.classList.remove('fade-out');
        nextImage.classList.remove('fade-in');
      }, 1000); // duración igual a la transición CSS

      currentIndex = nextIndex;
    }, 6000);
  }

  // Efecto parallax para la sección fondo-suave
  const fondoSuave = document.querySelector('.fondo-suave');

  if (fondoSuave) {
    fondoSuave.classList.add('revealed');

    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const maxOffset = 50; // limitar movimiento máximo
      const offset = Math.min(scrolled * 0.3, maxOffset);
      fondoSuave.style.backgroundPosition = `center calc(50% + ${offset}px)`;
    });
  }

  // Animar overlay del header con fade-in
  const header = document.querySelector('header');
  if (header) {
    setTimeout(() => {
      header.classList.add('visible');
    }, 500);
  }
});

// ScrollReveal animación (requiere librería cargada)
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal().reveal('.scroll-reveal', {
    origin: 'bottom',
    distance: '50px',
    duration: 1200,
    delay: 200,
    easing: 'ease-in-out',
  });
}

// Resaltar enlace en sección Itinerario
const itinerario = document.querySelector('#itinerario a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      itinerario.classList.add('resaltado');
      setTimeout(() => itinerario.classList.remove('resaltado'), 1000);
    }
  });
}, { threshold: 0.6 });

observer.observe(document.querySelector('#itinerario'));

// Menú hamburguesa (REEMPLAZAR ESTE BLOQUE)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

function openNav() {
  navLinks.classList.add('active');
  navLinks.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.innerHTML = '<i class="fas fa-times"></i>';
}

function closeNav() {
  navLinks.classList.remove('active');
  navLinks.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
}

if (menuToggle && navLinks) {
  // toggle con click
  menuToggle.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) closeNav();
    else openNav();
  });

  // cerramos menú al hacer scroll (evita que quede "oculto" y genere margen)
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
      closeNav();
    }
  }, { passive: true });

  // cerramos menú en resize si cambia a desktop (evita estados inconsistentes)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // aseguramos estado de navegación de escritorio
      navLinks.classList.remove('active');
      navLinks.setAttribute('aria-hidden', 'false');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      // en móvil por defecto aria-hidden true
      navLinks.setAttribute('aria-hidden', 'true');
    }
  });
}

// Atributos ARIA iniciales
if (navLinks) navLinks.setAttribute('aria-hidden', window.innerWidth <= 768 ? 'true' : 'false');
if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
