const whiteKeys = document.getElementsByClassName("white-keys");
const blackKeys = document.getElementsByClassName("black-keys");

const playAudio = (selectedKey) => () => {
  const key = new Audio(`audio/key-${selectedKey + 1}.mp3`);
  key.play();
};

for (
  let selectedWhiteKey = 0;
  selectedWhiteKey < whiteKeys.length;
  selectedWhiteKey++
) {
  whiteKeys[selectedWhiteKey].addEventListener(
    "click",
    playAudio(selectedWhiteKey)
  );
}

for (
  let selectedBlackKey = 0;
  selectedBlackKey < blackKeys.length;
  selectedBlackKey++
) {
  blackKeys[selectedBlackKey].addEventListener(
    "click",
    playAudio(selectedBlackKey + whiteKeys.length)
  );
}
