const field = document.getElementsByClassName("field");

const inputSymbols = document.querySelector("input#symbols");
const inputNumbers = document.querySelector("input#numbers");
const inputLowercase = document.querySelector("input#lowercase");
const inputUppercase = document.querySelector("input#uppercase");
const inputSimilar = document.querySelector("input#similar");
const slider = document.querySelectorAll("input#length")[0];

const lengthText = document.getElementById("lengthText");
const password = document.getElementById("password");

const characters = {
  symbols: "!@#$%^&*?",
  numbers: "0123456789",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

//first generation
generatePassword(
  inputSymbols.checked,
  inputNumbers.checked,
  inputLowercase.checked,
  inputUppercase.checked,
  inputSimilar.checked
);

slider.oninput = function () {
  lengthText.innerHTML = this.value;
  generatePassword(
    inputSymbols.checked,
    inputNumbers.checked,
    inputLowercase.checked,
    inputUppercase.checked,
    inputSimilar.checked
  );
};

function generatePassword(symbols, numbers, lowercase, uppercase, similar) {
  password.value = "";
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
  if (!symbols && !numbers && !lowercase && !uppercase && !similar) {
    password.value = "";
  }
}
