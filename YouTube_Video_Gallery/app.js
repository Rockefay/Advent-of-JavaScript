import { sampleAPIResponse } from "./sampleData.js";

const video = document.getElementsByClassName("video");
const thumbnail = document.getElementsByClassName("thumbnail");
const title = document.getElementsByClassName("title");
const featureTitle = document.getElementsByClassName("feature-title")[0];
const featureDescription = document.getElementsByClassName(
  "feature-description"
)[0];

//set title and description of feature video
featureTitle.innerHTML = sampleAPIResponse.items[0].snippet.title;
featureDescription.innerHTML = sampleAPIResponse.items[0].snippet.description;

//setting videos on side panel
for (let i = 0; i < video.length; i++) {
  thumbnail[i].setAttribute(
    "src",
    sampleAPIResponse.items[i].snippet.thumbnails.default.url
  );
  title[i].innerHTML = sampleAPIResponse.items[i].snippet.title;
}
