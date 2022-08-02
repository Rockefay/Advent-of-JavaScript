const items = document.querySelectorAll("h3");
document.addEventListener("scroll", () => {
  for (let i = 0; i < items.length; i++) {
    const id = items[i].getAttribute("class");
    if (isInView(items[i]))
      document.querySelector(`li#${id}`).classList.add("selected");
    else document.querySelector(`li#${id}`).classList.remove("selected");
  }
  if (document.getElementsByClassName("selected").length > 1)
    document.getElementsByClassName("selected")[0].classList.remove("selected");
});
function isInView(el) {
  let data = el.getBoundingClientRect();
  if (data.top < 300 && data.top > 0) return true;
  else return false;
}
