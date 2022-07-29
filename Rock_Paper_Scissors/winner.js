const playAgain = document.getElementsByClassName("play-again")[0];

playAgain.addEventListener("click", () => {
  window.location = "./index.html";
});

let choice = localStorage.getItem("choice");
console.log(choice);
