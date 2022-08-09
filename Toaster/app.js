const toaster = document.getElementsByClassName("toaster")[0];
const closeButton = document.getElementById("closeToaster");

toaster.classList.add("collapsed");

document.addEventListener("mousemove", function (event) {
  if (event.clientY < 50) {
    toaster.classList.remove("collapsed");
  }
});

closeButton.addEventListener("click", () => {
  toaster.classList.add("collapsed");
});
