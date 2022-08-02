var observer = new IntersectionObserver(function (entries) {
  for (let i = 0; i < entries.length; i++) {
    const id = entries[i].target.getAttribute("class");
    if (entries[i].isIntersecting === true) {
      document.querySelector(`li#${id}`).classList.add("selected");
    } else document.querySelector(`li#${id}`).classList.remove("selected");
  }
});
const items = document.querySelectorAll("h3");
for (let i = 0; i < items.length; i++) {
  observer.observe(items[i]);
}
