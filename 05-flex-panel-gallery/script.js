/* eslint-disable no-console */
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  // toggles the transition transform of the panels
  this.classList.toggle('open');
}

function toggleActive(e) {
  // toggles the open-active classes of the panels
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach( panel => panel.addEventListener('click', toggleOpen) );
panels.forEach( panel => panel.addEventListener('transitionend', toggleActive) );