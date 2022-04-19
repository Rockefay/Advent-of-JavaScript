const keys = document.getElementsByClassName("key");

changeKey = () => {
  const jiggle = document.getElementsByClassName("jiggle")[0];

  jiggle.classList.remove("jiggle");

  const newKey = keys[Math.floor(Math.random() * keys.length)];
  newKey.classList.add("jiggle");
};

document.addEventListener("keydown", function (event) {
  console.log(event.key.toUpperCase());
  if (
    event.key.toUpperCase() ==
    document.getElementsByClassName("jiggle")[0].dataset.key
  ) {
    changeKey();
  } else {
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].dataset.key == event.key.toUpperCase()) {
        keys[i].classList.add("mistake");
        setTimeout(() => {
          keys[i].classList.remove("mistake");
        }, 250);
      }
    }
  }
});
