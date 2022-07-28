const collapsable = document.getElementsByClassName("collapsable");
const expand = document.getElementsByClassName("expand")[0];
const question = document.getElementsByClassName("question");

for (let i = 0; i < collapsable.length; i++) {
  collapsable[i].addEventListener("click", () => {
    if (!collapsable[i].classList.contains("expand")) {
      collapsable[i].classList.add("expand");
      question[i].classList.add("question-expanded");
    } else {
      collapsable[i].classList.remove("expand");
      question[i].classList.remove("question-expanded");
    }
  });
}
