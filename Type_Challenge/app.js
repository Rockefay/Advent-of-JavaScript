const key = document.getElementsByClassName("key");
//document.getElementsByClassName("jiggle")[0];

changeKey = () => {
  const jiggle = document.getElementsByClassName("jiggle")[0];

  jiggle.classList.remove("jiggle");

  const newKey = key[Math.floor(Math.random() * key.length)];
  newKey.classList.add("jiggle");
};

document.addEventListener("keydown", function (event) {
  console.log(event.key.toUpperCase());
  if (
    event.key.toUpperCase() ==
    document.getElementsByClassName("jiggle")[0].dataset.key
  ) {
    changeKey();
  }
});
