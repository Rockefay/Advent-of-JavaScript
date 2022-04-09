const minutes = document.getElementsByClassName("minutes")[0];
const seconds = document.getElementsByClassName("seconds")[0];
const start = document.getElementsByClassName("start")[0];
const settings = document.getElementsByClassName("settings")[0];
const minutesText = document.getElementById("minutesText");
const secondsText = document.getElementById("secondsText");
const ring = document.getElementsByClassName("ring")[0];

let interval;

const toggleTimer = () => {
  const startingMinutes = parseInt(minutesText.value);
  const startingSeconds = parseInt(secondsText.value);
  const timer = { time: startingMinutes * 60 + startingSeconds };
  if (timer.time != 0) timer.time--;
  if (minutesText.disabled) {
    if (parseInt(minutesText.value) == 0 && parseInt(secondsText.value) == 0)
      ring.classList.remove("ending");
    if (interval != null) {
      start.innerHTML = "start";
      clearInterval(interval);
      interval = undefined;
    } else {
      start.innerHTML = "stop";
      interval = setInterval(updateTimer(timer), 1000);
    }
  }
};

const updateTimer = (timer) => () => {
  let min = Math.floor(timer.time / 60);
  let sec = timer.time % 60;

  sec = sec < 10 ? "0" + sec : sec;
  min = min < 10 ? "0" + min : min;
  console.log(min);
  console.log(sec);
  document.getElementById("minutesText").value = min;
  document.getElementById("secondsText").value = sec;
  if (timer.time > 0) {
    timer.time--;
  } else {
    ring.classList.add("ending");
  }
};

settings.addEventListener("click", () => {
  if (start.innerHTML == "start") {
    if (minutesText.disabled === false) {
      if (
        parseInt(minutesText.value) > 60 ||
        parseInt(secondsText.value) > 60 ||
        (parseInt(minutesText.value) == 0 && parseInt(secondsText.value) == 0)
      ) {
        alert("Wrong Input!");
      } else {
        minutesText.setAttribute("disabled", "");
        secondsText.setAttribute("disabled", "");
      }
    } else {
      minutesText.removeAttribute("disabled");
      secondsText.removeAttribute("disabled");
    }
  }
});

start.addEventListener("click", toggleTimer);
