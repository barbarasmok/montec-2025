document.addEventListener('DOMContentLoaded', () => {
  const openButtons = document.querySelectorAll('.open-gallery');
  const closeButtons = document.querySelectorAll('.lightbox-close');

  openButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      // 🔍 Log which button was clicked
      console.log('Gallery button clicked:', btn.dataset.gallery);

      const galleryId = btn.dataset.gallery;
      const lightbox = document.getElementById(galleryId);
      if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      } else {
        console.warn(`Lightbox with ID ${galleryId} not found.`);
      }
    });
  });

  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lightbox = btn.closest('.lightbox-overlay');
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  });

  document.querySelectorAll('.lightbox-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  });
});

// Lightbox slider functionality
document.querySelectorAll('.lightbox-overlay').forEach(lightbox => {
  let slides = lightbox.querySelectorAll('.lightbox-slide');
  let currentSlide = 0;

  const showSlide = index => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  // Init first slide
  showSlide(currentSlide);

  const nextBtn = lightbox.querySelector('.next');
  const prevBtn = lightbox.querySelector('.prev');

  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  }

  // Reset slider when reopened
  lightbox.addEventListener('classChange', () => {
    currentSlide = 0;
    showSlide(currentSlide);
  });
});
