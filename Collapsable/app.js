const collapsable = document.getElementsByClassName("collapsable");
const expand = document.getElementsByClassName("expand")[0];

for (let i = 0; i < collapsable.length; i++) {
  collapsable[i].addEventListener("click", () => {
    if (!collapsable[i].classList.contains("expand")) {
      collapsable[i].classList.add("expand");
    } else {
      collapsable[i].classList.remove("expand");
    }
  });
}
