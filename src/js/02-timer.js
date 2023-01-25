// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectDate = null;
const todayDate = new Date();
const datapicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const dd = document.querySelector('[data-days]');
const hd = document.querySelector('[data-hours]');
const md = document.querySelector('[data-minutes]');
const sd = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date().getTime(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= todayDate) {
      Notify.failure('Please choose a date in the future');
      btnStart.disabled = true;
    } else {
      selectDate = selectedDates[0];
      Notify.success('Just push the button "START"');
      btnStart.disabled = false;
    }
  },
};

flatpickr(datapicker, options);

btnStart.addEventListener('click', clickOnStart);

function clickOnStart() {
  const timer = setInterval(countDownTime, 1000);
  function countDownTime() {
    const todayDay = new Date();
    const diff = selectDate - todayDay;
    return diff;
  }
  return diff;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

let timeObject = convertMs(diff);
dd.textContent = addLeadingZero(timeObject.days);
hd.textContent = addLeadingZero(timeObject.hours);
md.textContent = addLeadingZero(timeObject.minutes);
sd.textContent = addLeadingZero(timeObject.seconds);

function stopTimer() {
  if (diff === 0) {
    timer = clearInterval();
  }
}
