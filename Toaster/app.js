const toaster = document.getElementsByClassName("toaster")[0];
const closeButton = document.getElementById("closeToaster");

toaster.classList.add("collapsed");
let myTimeout = setTimeout(showPopup, 15000);

document.addEventListener("mousemove", function (event) {
  if (event.clientY < 150) showPopup();
});

closeButton.addEventListener("click", () => {
  hidePopup();
  window.clearTimeout(myTimeout);
  myTimeout = setTimeout(showPopup, 15000);
});

document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    window.clearTimeout(myTimeout);
  } else {
    myTimeout = setTimeout(showPopup, 15000);
  }
});

function showPopup() {
  toaster.classList.remove("collapsed");
}

function hidePopup() {
  toaster.classList.add("collapsed");
}
