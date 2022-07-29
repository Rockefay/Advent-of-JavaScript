const playAgain = document.getElementsByClassName("play-again")[0];
const yourImg = document.getElementsByClassName("your-img")[0];
const computerImg = document.getElementsByClassName("computer-img")[0];

playAgain.addEventListener("click", () => {
  window.location = "./index.html";
});

/*
Choices:
0 - rock
1 - paper
2 - scissors
 */

const choice = localStorage.getItem("choice");
const computerChoice = Math.floor(Math.random() * (2 - 0)) + 0;
console.log(yourImg);

if (choice == 0) yourImg.setAttribute("src", "./images/rock.png");
else if (choice == 1) yourImg.setAttribute("src", "./images/paper.png");
else yourImg.setAttribute("src", "./images/scissors.png");

if (computerChoice == 0) computerImg.setAttribute("src", "./images/rock.png");
else if (computerChoice == 1)
  computerImg.setAttribute("src", "./images/paper.png");
else computerImg.setAttribute("src", "./images/scissors.png");
