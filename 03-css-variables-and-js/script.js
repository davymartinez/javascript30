/* eslint-disable no-console */

// select all input elements on the page with "controls" class
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // this const targets the 'data-sizing="px"' attribute of the spacing and blur controls
  // (the base color control does not use px, thus the '')
  const suffix = this.dataset.sizing || '';
  // set the value of every control as specified in the CSS :root element and HTML name attribute
  // the value gets the corresponding suffix appended if needed (spacing and blur) 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// call the handleUpdate function on 'change' and 'mousemove' events
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));