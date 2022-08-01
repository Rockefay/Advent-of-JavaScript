import { sampleAPIResponse } from "./sampleData.js";

const video = document.getElementsByClassName("video");
const thumbnail = document.getElementsByClassName("thumbnail");
const title = document.getElementsByClassName("title");
const featureVideo = document.getElementsByClassName("feature-video")[0];
const featureTitle = document.getElementsByClassName("feature-title")[0];
const featureDescription = document.getElementsByClassName(
  "feature-description"
)[0];

setFeatureVideo(0);

for (let i = 0; i < video.length; i++) {
  //setting videos on side panel
  thumbnail[i].setAttribute(
    "src",
    sampleAPIResponse.items[i].snippet.thumbnails.default.url
  );
  title[i].innerHTML = sampleAPIResponse.items[i].snippet.title;

  video[i].addEventListener("click", () => {
    setFeatureVideo(i);
  });
}

function setFeatureVideo(index) {
  const YTUrl = "https://www.youtube.com/embed/";
  featureVideo.setAttribute(
    "src",
    YTUrl + sampleAPIResponse.items[index].id.videoId
  );
  featureTitle.innerHTML = sampleAPIResponse.items[index].snippet.title;
  featureDescription.innerHTML =
    sampleAPIResponse.items[index].snippet.description;
}
