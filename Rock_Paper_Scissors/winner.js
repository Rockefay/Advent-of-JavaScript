const playAgain = document.getElementsByClassName("play-again")[0];
const yourImg = document.getElementsByClassName("your-img")[0];
const computerImg = document.getElementsByClassName("computer-img")[0];
const winner = document.getElementsByClassName("winner")[0];

playAgain.addEventListener("click", () => {
  window.location = "./index.html";
});

const choices = {
  Rock: { weakTo: "Paper", strongTo: "Scissors" },
  Paper: { weakTo: "Scissors", strongTo: "Rock" },
  Scissors: { weakTo: "Rock", strongTo: "Paper" },
};

let choice = localStorage.getItem("choice");
let computerChoice = Math.floor(Math.random() * (4 - 1)) + 1;

if (choice == 0) {
  yourImg.setAttribute("src", "./images/rock.png");
  choice = "Rock";
} else if (choice == 1) {
  yourImg.setAttribute("src", "./images/paper.png");
  choice = "Paper";
} else {
  yourImg.setAttribute("src", "./images/scissors.png");
  choice = "Scissors";
}

if (computerChoice == 1) {
  computerImg.setAttribute("src", "./images/rock.png");
  computerChoice = "Rock";
} else if (computerChoice == 2) {
  computerImg.setAttribute("src", "./images/paper.png");
  computerChoice = "Paper";
} else {
  computerImg.setAttribute("src", "./images/scissors.png");
  computerChoice = "Scissors";
}

function decideWinner(player, computer) {
  if (choices[player].strongTo === computer) playerWins();
  if (choices[player].weakTo === computer) computerWins();
  if (player === computer) draw();
}
function computerWins() {
  winner.classList.add("computer-wins");
}
function playerWins() {
  winner.classList.add("you-win");
}
function draw() {
  winner.classList.add("draw");
}

decideWinner(choice, computerChoice);
