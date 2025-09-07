
let timer;
let seconds = 0, minutes = 0, hours = 0;
let running = false;

function updateDisplay() {
  let display = document.getElementById("display");
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerHTML = `${h}:${m}:${s}`;
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  running = false;
  clearInterval(timer);
}

function reset() {
  running = false;
  clearInterval(timer);
  seconds = 0; minutes = 0; hours = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
}

function lap() {
  if (running) {
    let lapTime = document.getElementById("display").innerText;
    let li = document.createElement("li");
    li.innerText = lapTime;
    document.getElementById("laps").appendChild(li);
  }
}

updateDisplay();
