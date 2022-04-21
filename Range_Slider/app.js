const dollars = document.getElementsByClassName("dollars")[0];
const priceRange = document.getElementById("priceRange");

priceRange.oninput = function () {
  if (this.value % 100 == 0) {
    dollars.innerHTML = `${this.value / 100}.00`;
  } else dollars.innerHTML = this.value / 100;
};
