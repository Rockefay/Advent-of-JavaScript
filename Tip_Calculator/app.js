const tipAmount = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-per-person");

const billAmount = document.getElementById("bill-amount");
const numberOfPeople = document.getElementById("number-of-people");

const fivePercent = document.getElementById("five-percent");
const tenPercent = document.getElementById("ten-percent");
const fifteenPercent = document.getElementById("fifteen-percent");
const twentyPercent = document.getElementById("twenty-percent");

const calculateButton = document.getElementById("calculate");

const calculateAmount = (tip) => {
  tipAmount.innerHTML = (billAmount.value * tip).toFixed(2);
  totalPerPerson.innerHTML = (
    (+billAmount.value + +tipAmount.innerHTML) /
    numberOfPeople.value
  ).toFixed(2);
};

const changeValues = () => {
  if (billAmount.value != 0 && numberOfPeople.value != 0) {
    if (fivePercent.checked == true) {
      calculateAmount(0.05);
    } else if (tenPercent.checked == true) {
      calculateAmount(0.1);
    } else if (fifteenPercent.checked == true) {
      calculateAmount(0.15);
    } else if (twentyPercent.checked == true) {
      calculateAmount(0.2);
    }
  }
};

calculateButton.addEventListener("click", changeValues);
