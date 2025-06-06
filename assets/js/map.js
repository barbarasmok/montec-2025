document.querySelectorAll('.map-dot').forEach(dot => {
  dot.addEventListener('mouseover', e => {
    const tooltip = document.getElementById('tooltip');
    const regionName = e.target.getAttribute('data-tooltip');
    const projectsCount = e.target.getAttribute('data-projects');

    // Tooltip content
    tooltip.innerHTML = `
      <span>${regionName}</span><br>
      <span class="numbers">${projectsCount}</span><br>
      <span class="proyectos">Projects</span>
    `;

    // Get bounding rects for relative positioning
    const rect = e.target.getBoundingClientRect();
    const containerRect = tooltip.parentElement.getBoundingClientRect();

    // Correct position relative to parent container (no window.scrollY)
    tooltip.style.left = `${
      rect.left - containerRect.left + rect.width / 2 + 10
    }px`;
    tooltip.style.top = `${rect.top - containerRect.top + 10}px`;

    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;

    // Highlight the region
    const regionId = `region-${regionName.toLowerCase().replace(/\s+/g, '-')}`;
    const region = document.getElementById(regionId);
    if (region) {
      region.style.fill = '#80b3ff';
    }

    // Highlight the dot
    e.target.setAttribute('fill', 'rgba(0, 123, 255, 0.7)');
  });

  dot.addEventListener('mouseout', e => {
    const tooltip = document.getElementById('tooltip');
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;

    e.target.setAttribute('fill', '#ff4d3e');

    const regionId = `region-${e.target
      .getAttribute('data-tooltip')
      .toLowerCase()
      .replace(/\s+/g, '-')}`;
    const region = document.getElementById(regionId);
    if (region) {
      region.style.fill = '#dfe0e1';
    }
  });
});

// Open the tooltip for 'dot-metropolitana' by default on load
window.addEventListener('load', () => {
  const defaultDot = document.getElementById('dot-metropolitana');
  if (!defaultDot) return;

  const tooltip = document.getElementById('tooltip');
  const regionName = defaultDot.getAttribute('data-tooltip');
  const projectsCount = defaultDot.getAttribute('data-projects');

  tooltip.innerHTML = `
    <span>${regionName}</span><br>
    <span class="numbers">${projectsCount}</span><br>
    <span class="proyectos">Projects</span>
  `;

  const rect = defaultDot.getBoundingClientRect();
  const containerRect = tooltip.parentElement.getBoundingClientRect();

  tooltip.style.left = `${
    rect.left - containerRect.left + rect.width / 2 + 10
  }px`;
  tooltip.style.top = `${rect.top - containerRect.top + 10}px`;

  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = 1;

  defaultDot.setAttribute('fill', 'rgba(0, 123, 255, 0.7)');

  const defaultRegion = document.getElementById(
    `region-${regionName.toLowerCase().replace(/\s+/g, '-')}`
  );
  if (defaultRegion) {
    defaultRegion.style.fill = '#80b3ff';
  }
});
