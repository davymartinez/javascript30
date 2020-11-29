/* eslint-disable no-undef */
/* eslint-disable no-console */
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // console.log(`Now: ${now}`);
  const seconds = now.getSeconds();
  // console.log(`Seconds: ${seconds}`);
  const minutes = now.getMinutes();
  // console.log(`Minutes: ${minutes}`);
  const hours = now.getHours();
  // console.log(`Hours: ${hours}`);
  const secondsToDegrees = ((seconds / 60) * 360) + 90;
  // console.log(`Seconds to degrees: ${secondsToDegrees}`);
  const minutesToDegrees = ((minutes / 60) * 360) + 90;
  // console.log(`Minutes to degrees: ${minutesToDegrees}`);
  const hoursToDegrees = ((hours / 12) * 360) + 90;
  // console.log(`Hours to degrees: ${hoursToDegrees}`);
  secondHand.style.transform = `rotate(${secondsToDegrees}deg)`;
  minHand.style.transform = `rotate(${minutesToDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursToDegrees})`;
}

setInterval(setDate, 1000);

setDate();