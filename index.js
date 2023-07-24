const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (endDate, timer) => {

  const now = new Date().getTime();
  const timeRemaining = endDate - now;
  let hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  if (timeRemaining <= 0) {
    clearInterval(timer);
    console.log('Таймер завершен!');
    return;
  };

  if(hours < 10) hours = "0" + hours;
  if(minutes < 10) minutes = "0" + minutes;
  if(second < 10) second = "0" + second;

  timerEl.innerHTML = `${hours} : ${minutes} : ${second}`
};

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value) * 1000;
  const endDate = new Date().getTime() + seconds;
  const timer = setInterval(() => {createTimerAnimator(endDate, timer)}, 100);
  inputEl.value = '';
});


