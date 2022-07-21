const img = document.getElementsByClassName("img");
const feature = document.getElementsByClassName("feature");
const listItems = document.getElementsByClassName("list-item");
const left = document.getElementsByClassName("left")[0];
const right = document.getElementsByClassName("right")[0];
const featureImg = document.getElementsByClassName("feature-img")[0];
const caption = document.getElementsByClassName("caption")[0];

const content = [
  {
    image: "dave-hoefler-okUIdo6NxGo-unsplash.jpg",
    caption: "Photo by Dave Hoefler on Unsplash",
  },
  {
    image: "sherman-yang-VBBGigIuaDY-unsplash.jpg",
    caption: "Photo by Sherman Yang on Unsplash",
  },
  {
    image: "jakob-owens-EwRM05V0VSI-unsplash.jpg",
    caption: "Photo by Jakob Owens on Unsplash",
  },
  {
    image: "finding-dan-dan-grinwis-O35rT6OytRo-unsplash.jpg",
    caption: "Photo by Dan Grinwis on Unsplash",
  },
  {
    image: "vincentiu-solomon-ln5drpv_ImI-unsplash.jpg",
    caption: "Photo by Vincentiu Solomon on Unsplash",
  },
  {
    image: "silas-baisch-Wn4ulyzVoD4-unsplash.jpg",
    caption: "Photo by Silas Baisch on Unsplash",
  },
  {
    image: "eugene-golovesov-EXdXp7Z4X4w-unsplash.jpg",
    caption: "Photo by Eugene Golovesov on Unsplash",
  },
  {
    image: "jennifer-reynolds-_8HI5xf4TkE-unsplash.jpg",
    caption: "Photo by Jennifer reynolds on Unsplash",
  },
  {
    image: "kellen-riggin-SIBOiXKg0Ds-unsplash.jpg",
    caption: "Photo by Kellen Riggin on Unsplash",
  },
  {
    image: "rafael-hoyos-weht-zhkAp8DGkxw-unsplash.jpg",
    caption: "Photo by Rafael Hoyos on Unsplash",
  },
  {
    image: "sonya-romanovska-wzdXhyi3AiM-unsplash.jpg",
    caption: "Photo by Sonya Romanovska on Unsplash",
  },
];

for (let i = 0; i < img.length; i++) {
  img[i].addEventListener("click", () => {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    listItems[i].classList.add("selected");
    changeImageAndCaption(i);
  });
}
left.addEventListener("click", () => {
  let index;
  for (let j = 0; j < listItems.length; j++) {
    if (listItems[j].classList.contains("selected")) {
      if ((index = j - 1 < 0)) index = 0;
      else index = j - 1;
    }
  }
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  listItems[index].classList.add("selected");
  changeImageAndCaption(index);
});
right.addEventListener("click", () => {
  let index;
  for (let j = 0; j < listItems.length; j++) {
    if (listItems[j].classList.contains("selected")) {
      if ((index = j + 1 > listItems.length - 1)) index = listItems.length - 1;
      else index = j + 1;
    }
  }
  document.getElementsByClassName("selected")[0].classList.remove("selected");
  listItems[index].classList.add("selected");
  changeImageAndCaption(index);
});

function changeImageAndCaption(index) {
  featureImg.setAttribute("src", img[index].getAttribute("src"));
  caption.innerHTML = content[index].caption;
}
