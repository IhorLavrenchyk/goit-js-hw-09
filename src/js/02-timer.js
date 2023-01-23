// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let selectDate = null;
const todayDate = new Date();
const datapicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const timer = setInterval(countDownTime, 1000);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date().getTime(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= todayDay) {
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

function countDownTime() {
  const todayDay = new Date();
  const diff = selectDate - todayDay;
  console.log(diff);
}

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }
