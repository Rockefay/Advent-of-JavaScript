const field = document.getElementsByClassName("field");
const password = document.getElementsByClassName("password")[0];

const checkBoxes = document.querySelectorAll("input.checkbox");
const slider = document.querySelectorAll("input#length")[0];

const lengthText = document.getElementById("lengthText");

slider.oninput = function () {
  lengthText.innerHTML = this.value;
};
