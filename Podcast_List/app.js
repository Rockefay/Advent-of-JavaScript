const episodes = document.getElementsByClassName("episode");

let isShiftPressed = false;
let lastEpisode = 0;
const changeState = (currentEpisode) => () => {
  if (isShiftPressed) {
    for (lastEpisode; lastEpisode < currentEpisode; lastEpisode++) {
      episodes[lastEpisode].checked = true;
    }
  } else {
    lastEpisode = currentEpisode;
  }
};

document.addEventListener("keydown", function (event) {
  if (event.key == "Shift") isShiftPressed = true;
  else isShiftPressed = false;
});
document.addEventListener("keyup", function (event) {
  isShiftPressed = false;
});

for (
  let currentEpisode = 0;
  currentEpisode < episodes.length;
  currentEpisode++
) {
  episodes[currentEpisode].addEventListener(
    "click",
    changeState(currentEpisode)
  );
}
