import { sampleAPIResponse } from "./sampleData.js";

const video = document.getElementsByClassName("video");
const thumbnail = document.getElementsByClassName("thumbnail");
const title = document.getElementsByClassName("title");

for (let i = 0; i < video.length; i++) {
  thumbnail[i].setAttribute(
    "src",
    sampleAPIResponse.items[i + 1].snippet.thumbnails.default.url
  );
  title[i].innerHTML = sampleAPIResponse.items[i + 1].snippet.title;
}
