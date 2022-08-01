const starRating = document.getElementsByClassName("star-rating")[0];
const star = document.getElementsByClassName("star");

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("mouseover", () => {
    starRating.classList.remove(
      "star-1",
      "star-2",
      "star-3",
      "star-4",
      "star-5"
    );
    starRating.classList.add(`star-${i + 1}`);
  });
}
