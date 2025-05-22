document.addEventListener('DOMContentLoaded', () => {
  // ✅ 1. Toggle .event-details on click
  let events = document.querySelectorAll('.timeline-event');
  events.forEach(event => {
    event.addEventListener('click', () => {
      let details = event.querySelector('.event-details');
      details.classList.toggle('visible');
    });
  });

  // ✅ 2. Scroll-triggered timeline animation (starts when timeline section appears)
  const section = document.querySelector('#timeline-section');
  const items = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, index * 150); // optional stagger
          });
          observer.unobserve(entry.target); // trigger only once
        }
      });
    },
    {
      threshold: 0.25, // 25% of the section must be visible
    }
  );

  if (section) observer.observe(section);
});
