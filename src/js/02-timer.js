// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

let selectDate = 0;
const todayDate = new Date();

const datapicker = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const todayDay = new Date();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectDates[0] <= todayDate) {
      window.alert('Please choose a date in the future');
      btnStart.disabled = false;
    } else {
      selectDate = selectedDates[0];
      btnStart.disabled = true;
    }
  },
};
console.log('hi');

console.log(selectDate);
console.log(todayDate);
flatpickr(datapicker, options);

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
