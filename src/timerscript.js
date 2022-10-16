let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');
let showTime = document.getElementById('showTime');

startBtn.addEventListener('click', beginCounter);
stopBtn.addEventListener('click', stopCounter);
resetBtn.addEventListener('click', resetCounter);

let sec = 0;
let interval;

export function beginCounter() {
  interval = setInterval(count, 1000);
  
  function count(){
    sec++;
    showTime.innerHTML = sec;
  }
}

export function stopCounter() {
  clearInterval(interval);
}

export function resetCounter() {
  clearInterval(interval);
  sec = 0;
  showTime.innerHTML = sec;
}
