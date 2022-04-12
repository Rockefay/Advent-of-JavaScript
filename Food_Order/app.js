const menuItems = [
  {
    name: "French Fries with Ketchup",
    price: 2.23,
    image: "images/plate__french-fries.png",
    alt: "French Fries",
    id: "FrenchFries",
    count: 0,
  },
  {
    name: "Salmon and Vegetables",
    price: 5.12,
    image: "images/plate__salmon-vegetables.png",
    alt: "Salmonand Vegetables",
    id: "SalmonandVegetables",
    count: 0,
  },
  {
    name: "Spaghetti Meat Sauce",
    price: 7.82,
    image: "images/plate__spaghetti-meat-sauce.png",
    alt: "Spaghetti with Meat Sauce",
    id: "SpaghettiwithMeatSauce",
    count: 0,
  },
  {
    name: "Bacon, Eggs, and Toast",
    price: 5.99,
    image: "images/plate__bacon-eggs.png",
    alt: "Bacon, Eggs and Toast",
    id: "BaconEggsandToast",
    count: 0,
  },
  {
    name: "Chicken Salad with Parmesan",
    price: 6.98,
    image: "images/plate__chicken-salad.png",
    alt: "Chicke Saladwith Parmesan",
    id: "ChickeSaladwithParmesan",
    count: 0,
  },
  {
    name: "Fish Sticks and Fries",
    price: 6.34,
    image: "images/plate__fish-sticks-fries.png",
    alt: "Fish Sticks and Fries",
    id: "FishSticksandFries",
    count: 0,
  },
];

const addToCartButtons = document.getElementsByClassName("add");
const cartSummary = document.getElementsByClassName("cart-summary")[0];
const empty = document.getElementsByClassName("empty")[0];

const removeItem = (selectedItemIndex) => {
  addToCartButtons[selectedItemIndex].classList.remove("in-cart");
  addToCartButtons[selectedItemIndex].innerHTML = `Add to Cart`;

  menuItems[selectedItemIndex].count = 0;
  const item = document.getElementById(
    `cart_${menuItems[selectedItemIndex].id}`
  );
  item.parentNode.removeChild(item);
  if (cartSummary.innerHTML === "")
    empty.removeAttribute("style", "display: none;");
};

const showQuantity = (selectedItemIndex) => {
  const quantities = document.querySelectorAll(
    `#cart_${menuItems[selectedItemIndex].id} .quantity`
  );
  quantities.forEach((element) => {
    element.innerHTML = menuItems[selectedItemIndex].count;
  });
};

const calculateTotal = () => {
  const prices = document.querySelectorAll(`.cart-summary .price`);
  const quantities = document.querySelectorAll(
    ".cart-summary .quantity-display"
  );
  const subtotal = document.getElementsByClassName("amount price subtotal")[0];
  const tax = document.getElementsByClassName("amount price tax")[0];
  const total = document.getElementsByClassName("amount price total")[0];

  let subtotalValue = 0;

  prices.forEach((price, index) => {
    subtotalValue += +price.innerText.substr(1) * +quantities[index].innerText;
  });
  subtotalValue = subtotalValue.toFixed(2);
  subtotal.innerHTML = `$${subtotalValue}`;

  let taxValue = (+subtotalValue * 0.0975).toFixed(2);
  tax.innerHTML = `$${taxValue}`;

  let totalValue = (+subtotalValue + +taxValue).toFixed(2);
  total.innerHTML = `$${totalValue}`;
};

const changeState = (selectedItemIndex) => () => {
  if (addToCartButtons[selectedItemIndex].innerHTML === "Add to Cart") {
    addToCartButtons[selectedItemIndex].classList.add("in-cart");
    addToCartButtons[
      selectedItemIndex
    ].innerHTML = `<img src="images/check.svg" alt="Check" /> In Cart`;

    empty.setAttribute("style", "display: none;");
    menuItems[selectedItemIndex].count = 1;
    cartSummary.innerHTML += `<li id="cart_${menuItems[selectedItemIndex].id}"><div class="plate">
    <img src=${menuItems[selectedItemIndex].image} alt=${menuItems[selectedItemIndex].alt}class="plate" />
    <div class="quantity quantity-display">1</div>
  </div>
  <div class="content">
    <p class="menu-item">${menuItems[selectedItemIndex].name}</p>
    <p class="price">$${menuItems[selectedItemIndex].price}</p>
  </div>
  <div class="quantity__wrapper">
    <button class="decrease" onclick="decreaseCount(${selectedItemIndex})">
      <img src="images/chevron.svg" />
    </button>
    <div class="quantity">${menuItems[selectedItemIndex].count}</div>
    <button class="increase" onclick="increaseCount(${selectedItemIndex})">
      <img src="images/chevron.svg" />
    </button>
  </div>
  <div class="subtotal">
    $${menuItems[selectedItemIndex].price}
  </div></li>`;
    calculateTotal();
  } else {
    removeItem(selectedItemIndex);
    calculateTotal();
  }
};

const increaseCount = (selectedItemIndex) => {
  menuItems[selectedItemIndex].count++;
  showQuantity(selectedItemIndex);
  calculateTotal();
};

const decreaseCount = (selectedItemIndex) => {
  if (menuItems[selectedItemIndex].count === 1) {
    removeItem(selectedItemIndex);
    calculateTotal();
  } else {
    menuItems[selectedItemIndex].count--;
    showQuantity(selectedItemIndex);
    calculateTotal();
  }
};

for (let counter = 0; counter < addToCartButtons.length; counter++) {
  addToCartButtons[counter].addEventListener("click", changeState(counter));
}
