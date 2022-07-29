const choice = document.getElementsByClassName("choice");

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", () => {
    window.location = "./winner.html";
    localStorage.setItem("choice", i);
  });
}
