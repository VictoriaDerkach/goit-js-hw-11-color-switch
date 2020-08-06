import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const btnStart = document.querySelector('button[data-action="start"]');
const btnStop = document.querySelector('button[data-action="stop"]');
const body = document.getElementsByTagName('body')[0];
let intervalId = null;

const startColorTimer = function () {
  btnStart.disabled = true;
  intervalId = setInterval(function () {
    const randomNumber = randomIntegerFromInterval(0, 6);
    body.style.backgroundColor = colors[randomNumber];
  }, 1000);
};
const stopColorTimer = function () {
  btnStart.disabled = false;
  clearInterval(intervalId);
};
btnStart.addEventListener('click', startColorTimer);
btnStop.addEventListener('click', stopColorTimer);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
