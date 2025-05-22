document.addEventListener('DOMContentLoaded', () => {
  console.log('Sitio cargado correctamente');

  // Menú de navegación activo
  let links = document.querySelectorAll('nav a');
  let url = window.location.pathname.split('/').pop();

  links.forEach(link => {
    if (link.getAttribute('href') === url) {
      link.classList.add('active');
    }
  });

  // Desplegable de menú en responsive
  let menuToggle = document.getElementById('menu-toggle');
  let navMenu = document.getElementById('nav-menu');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});

// Nav Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
});
// Nav Mobile Toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.navbar-toggler');
  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('collapsed');
  });
});

// Scroll to top functionality if you want JS instead of CSS scroll-behavior
document.querySelector('.back-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Accordion
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.accordion-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const item = toggle.parentElement;
      const icon = toggle.querySelector('.accordion-icon');

      item.classList.toggle('open');

      // Toggle icon src
      if (item.classList.contains('open')) {
        icon.src = 'assets/imgs/icons/arrow-up.svg';
      } else {
        icon.src = 'assets/imgs/icons/arrow-down.svg';
      }

      // Opcional: cerrar otros
      // document.querySelectorAll('.accordion-item').forEach(i => {
      //   if (i !== item) {
      //     i.classList.remove('open');
      //     i.querySelector('.accordion-icon').src = 'assets/imgs/arrow-down.svg';
      //   }
      // });
    });
  });
});

// NAV Scroll Changes BG Colour
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
    navbar.classList.remove('navbar-transparent');
  } else {
    navbar.classList.remove('navbar-scrolled');
    navbar.classList.add('navbar-transparent');
  }
});
