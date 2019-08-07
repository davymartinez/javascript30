/* eslint-disable no-undef */
/* eslint-disable no-console */
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds;
  const minutes = now.getMinutes;
  const hours = now.getHours;
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  const hoursToDegrees = ((hours / 12) * 360) + 90;
  $(document).ready(function() {
    secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
    minHand.style.transform = `rotate(${minutesToDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursToDegrees})`;
  });
}

setInterval(setDate, 1000);

setDate();