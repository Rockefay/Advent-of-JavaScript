const creditCardWrapper = document.getElementsByClassName(
  "credit-card__wrapper"
)[0];
const CreditCardNumber = document.querySelector(
  "div.field input[name='card-number']"
);

CreditCardNumber.addEventListener("keyup", () => {
  switch (
    document.querySelector("div.field input[name='card-number']").value[0]
  ) {
    case "3":
      flipCard("american");
      break;
    case "4":
      flipCard("visa");
      break;
    case "5":
      flipCard("mastercard");
      break;
    case "6":
      flipCard("discover");
      break;
  }
});

function flipCard(cardType) {
  creditCardWrapper.setAttribute("class", `credit-card__wrapper ${cardType}`);
}
