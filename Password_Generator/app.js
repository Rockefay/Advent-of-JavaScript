const field = document.getElementsByClassName("field");

const checkBoxes = document.querySelectorAll("input.checkbox");
const slider = document.querySelectorAll("input#length")[0];

const lengthText = document.getElementById("lengthText");
const password = document.getElementById("password");

const characters = {
  symbols: "!@#$%^&*?",
  numbers: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

generatePassword(true, true, true, true, false);

slider.oninput = function () {
  lengthText.innerHTML = this.value;
};

function generatePassword(symbols, numbers, lowercase, uppercase, similar) {
  let characterBase = "";
  if (symbols) characterBase += characters.symbols;
  if (numbers) characterBase += characters.numbers;
  if (lowercase) characterBase += characters.lowercase;
  if (uppercase) characterBase += characters.uppercase;
  if (!similar) {
    characterBase = characterBase.replace("l", "");
    characterBase = characterBase.replace("L", "");
    characterBase = characterBase.replace("i", "");
    characterBase = characterBase.replace("I", "");
    characterBase = characterBase.replace("1", "");
    characterBase = characterBase.replace("0", "");
    characterBase = characterBase.replace("o", "");
    characterBase = characterBase.replace("O", "");
  }
  for (let i = 0; i < slider.value; i++) {
    password.value +=
      characterBase[Math.floor(Math.random() * characterBase.length)];
  }
}
