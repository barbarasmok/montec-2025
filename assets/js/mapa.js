document.querySelectorAll('.map-dot').forEach(dot => {
  dot.addEventListener('mouseover', e => {
    const tooltip = document.getElementById('tooltip');
    const regionName = e.target.getAttribute('data-tooltip');
    const projectsCount = e.target.getAttribute('data-projects');

    // Create the tooltip content with multiple lines
    tooltip.innerHTML = `
      <span>${regionName}</span><br>
      <span class="numbers">${projectsCount}</span><br>
      <span class="proyectos">Proyectos</span>
    `;

    // Position the tooltip near the dot's position
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + rect.width / 2 + 10}px`;
    tooltip.style.top = `${rect.top + window.scrollY + 10}px`;

    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = 1;

    // Construct the region id dynamically from the data-tooltip value
    const regionId = `region-${regionName.toLowerCase().replace(/\s+/g, '-')}`;
    const region = document.getElementById(regionId);

    // Log to confirm region selection
    console.log(
      `Hovering over dot: ${regionName}, targeting region: ${regionId}`
    );

    // If the region is found, change its fill color using inline style
    if (region) {
      console.log(`Changing region color to #80b3ff for region: ${regionId}`);
      region.style.fill = '#80b3ff'; // Highlight region color
    } else {
      console.log(`Region not found: ${regionId}`);
    }

    // Change the dot's color on hover
    e.target.setAttribute('fill', 'rgba(0, 123, 255, 0.7)'); // Highlight the dot
  });

  dot.addEventListener('mouseout', e => {
    const tooltip = document.getElementById('tooltip');

    // Hide the tooltip when mouse leaves the dot
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = 0;

    // Reset the dot's color back to its original state
    e.target.setAttribute('fill', '#ff4d3e'); // Reset dot color

    // Construct the region id dynamically from the data-tooltip value
    const regionId = `region-${e.target
      .getAttribute('data-tooltip')
      .toLowerCase()
      .replace(/\s+/g, '-')}`;
    const region = document.getElementById(regionId);

    // Reset the region's color
    if (region) {
      console.log(`Resetting region color to #dfe0e1 for region: ${regionId}`);
      region.style.fill = '#dfe0e1'; // Reset the region color
    } else {
      console.log(`Region not found: ${regionId}`);
    }
  });
});

// Open the tooltip for 'dot-metropolitana' by default when the page loads
window.addEventListener('load', () => {
  const defaultDot = document.getElementById('dot-metropolitana'); // Default tooltip (dot-metropolitana)

  const tooltip = document.getElementById('tooltip');
  const regionName = defaultDot.getAttribute('data-tooltip');
  const projectsCount = defaultDot.getAttribute('data-projects');

  // Set the tooltip content for the default dot with appropriate classes
  tooltip.innerHTML = `
    <span>${regionName}</span><br>
    <span class="numbers">${projectsCount}</span><br>
    <span class="proyectos">Proyectos</span>
  `;

  // Get the position of dot-metropolitana and position the tooltip accordingly
  const rect = defaultDot.getBoundingClientRect();
  tooltip.style.left = `${rect.left + rect.width / 2 + 10}px`;
  tooltip.style.top = `${rect.top + window.scrollY + 10}px`;

  // Make the tooltip visible by default
  tooltip.style.visibility = 'visible';
  tooltip.style.opacity = 1;

  // Optionally, change the default dot's background color
  defaultDot.setAttribute('fill', 'rgba(0, 123, 255, 0.7)'); // Highlight the default dot

  // Optionally, highlight the region on load as well
  const defaultRegion = document.getElementById(
    `region-${regionName.toLowerCase().replace(/\s+/g, '-')}`
  );
  if (defaultRegion) {
    console.log(`Default region found: region-${regionName}`);
    defaultRegion.style.fill = '#80b3ff'; // Highlight the region
  } else {
    console.log(`Default region not found: region-${regionName}`);
  }
});
