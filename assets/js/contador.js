document.addEventListener('DOMContentLoaded', () => {
  function animateCounter(id, target, speed) {
    const counterElement = document.getElementById(id);
    if (!counterElement) return;

    let count = 0;
    const increment = target > 1000 ? 10 : 1;

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(interval);
      }
      counterElement.textContent = count;
    }, speed);
  }

  // Define counters by ID, target, and speed
  const counters = [
    { id: 'counter1', target: 30, speed: 5 },
    { id: 'counter2', target: 3000, speed: 1 },
    { id: 'counter-servicios1', target: 30, speed: 5 },
    { id: 'counter-servicios2', target: 3000, speed: 1 },
    { id: 'counter-servicios3', target: 20, speed: 5 },
    { id: 'counter-proyectos', target: 30, speed: 5 },
  ];

  // 👇 Target any section with class "counter-section"
  const counterSections = document.querySelectorAll('.counter-section');

  counterSections.forEach(counterSection => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            counters.forEach(({ id, target, speed }) => {
              animateCounter(id, target, speed);
            });
            observer.unobserve(entry.target); // Run only once
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    observer.observe(counterSection);
  });
});
