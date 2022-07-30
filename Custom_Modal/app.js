const dot = document.getElementsByClassName("dot")[0];
const popup = document.getElementsByClassName("popup")[0];

dot.addEventListener("click", () => {
  popup.classList.add("overlay");
  popup.innerHTML += `
  <div class="overlay">
    <div class="modal">
        <button class="close">
            <img src="images/close.svg" alt="Close" />
        </button>

        <div class="content">
            <h1>Elgato Key Lights</h1>
            <div class="description">
                <p>
                    These lights are great if you shoot video at your desk.
                </p>
                <p>
                    My desk is pushed up against the wall, so I didn’t have room for a large soft box. These lights
                    still
                    deliver on the
                    look that I wanted. Plus, it comes with a desktop app where you can adjust the brightness and
                    temperature.
                </p>
            </div>
            <a href="http://amazon.com" class="buy-now" target="_blank">
                BUY NOW for $169.99
            </a>
        </div>
        <div class="product-image">
            <img src="images/elgato-key-light.png" alt="Elgato Key Light" />
        </div>
  `;

  document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document
      .getElementsByClassName("overlay")[0]
      .setAttribute("style", "backdrop-filter: blur(0px)");
    document
      .getElementsByClassName("modal")[0]
      .setAttribute("style", "display: none");
    popup.innerHTML = "";
    popup.classList.remove("overlay");
  });
});
