const bcgBody = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let timer = 0;

function getRandomHexColor() {
  return #${Math.floor(Math.random() * 16777215).toString(16)};
}
console.log(getRandomHexColor());

// bcgBody.style.backgroundColor = getRandomHexColor();

btnStart.addEventListener('click', newColor);
btnStop.addEventListener('click', stopTimer);

function setBodyColor() {
  bcgBody.style.backgroundColor = getRandomHexColor();
}

function newColor() {
  timer = setInterval(setBodyColor, 1000);
  btnStart.disabled = true;
}

function stopTimer() {
    clearInterval(timer);
    btnStart.disabled = false;
}
