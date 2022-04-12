const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 2.23,
    image: "images/plate__french-fries.png",
    alt: "FrenchFries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 5.12,
    image: "images/plate__salmon-vegetables.png",
    alt: "SalmonandVegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 7.82,
    image: "images/plate__spaghetti-meat-sauce.png",
    alt: "SpaghettiwithMeatSauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 5.99,
    image: "images/plate__bacon-eggs.png",
    alt: "BaconEggsandToast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 6.98,
    image: "images/plate__chicken-salad.png",
    alt: "ChickeSaladwithParmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 6.34,
    image: "images/plate__fish-sticks-fries.png",
    alt: "FishSticksandFries",
    count: 0,
  },
];

const add = document.getElementsByClassName("add");
const cartSummary = document.getElementsByClassName("cart-summary")[0];
const empty = document.getElementsByClassName("empty")[0];

let plateId = 0;

const changeState = (counter) => () => {
  if (add[counter].innerHTML === "Add to Cart") {
    add[counter].classList.add("in-cart");
    add[
      counter
    ].innerHTML = `<img src="images/check.svg" alt="Check" /> In Cart`;

    empty.setAttribute("style", "display: none;");
    menuItems[counter].count = 1;
    cartSummary.innerHTML += `<li id="${menuItems[counter].alt}"><div class="plate">
    <img src=${menuItems[counter].image} alt=${menuItems[counter].alt}class="plate" />
    <div class="quantity">1</div>
  </div>
  <div class="content">
    <p class="menu-item">${menuItems[counter].name}</p>
    <p class="price">$${menuItems[counter].price}</p>
  </div>
  <div class="quantity__wrapper">
    <button class="decrease">
      <img src="images/chevron.svg" />
    </button>
    <div class="quantity">${menuItems[counter].count}</div>
    <button class="increase">
      <img src="images/chevron.svg" />
    </button>
  </div>
  <div class="subtotal">
    $${menuItems[counter].price}
  </div></li>`;
    plateId++;
  } else {
    add[counter].classList.remove("in-cart");
    add[counter].innerHTML = `Add to Cart`;

    menuItems[counter].count = 0;
    const item = document.getElementById(`${menuItems[counter].alt}`);
    item.parentNode.removeChild(item);
    if (cartSummary.innerHTML === "")
      empty.removeAttribute("style", "display: none;");
  }
};

for (let counter = 0; counter < add.length; counter++) {
  add[counter].addEventListener("click", changeState(counter));
}
