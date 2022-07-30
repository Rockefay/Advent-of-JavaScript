const overlay = document.getElementsByClassName("overlay")[0];
const modal = document.getElementsByClassName("modal")[0];
const close = document.getElementsByClassName("close")[0];

close.addEventListener("click", () => {
  overlay.setAttribute("style", "backdrop-filter: blur(0px)");
  modal.setAttribute("style", "display: none");
});
