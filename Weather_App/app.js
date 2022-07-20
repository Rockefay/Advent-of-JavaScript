const dayOfWeek = document.getElementsByClassName("day-of-week");
const date = document.getElementsByClassName("date");
const temperature = document.getElementsByClassName("temperature");
const precipitation = document.getElementsByClassName("precipitation");
const low = document.getElementsByClassName("low");

const daysOfWeekMap = {
  0: "SUN",
  1: "MON",
  2: "TUES",
  3: "WED",
  4: "THUR",
  5: "FRI",
  6: "SAT",
};

const iconNameToSizeMap = {
  cloudy: { width: 264, height: 166 },
  sunny: { width: 208, height: 213 },
  stormy: { width: 246, height: 187 },
  snowy: { width: 230, height: 196 },
  "partly-cloudy": { width: 230, height: 209 },
  rainy: { width: 160, height: 222 },
};

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

async function setWeather() {
  let weatherData;

  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=51.759445&lon=19.457216&appid=ae4bfb854cc76a5b702f650b7385bdd7&units=metric`
  );

  weatherData = await data.json();

  const currentDate = new Date();

  for (let i = 0; i < 7; i++) {
    //Change the date
    const day = currentDate.getDay();
    if (day + i <= 6) dayOfWeek[i].innerHTML = daysOfWeekMap[day + i];
    else dayOfWeek[i].innerHTML = daysOfWeekMap[day + i - 7];

    const number = currentDate.getDate();
    if (
      number + i <=
      daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear())
    )
      date[i].innerHTML = number + i;
    else
      date[i].innerHTML =
        number +
        i -
        daysInMonth(currentDate.getMonth() + 1, currentDate.getFullYear());

    //Change the temperature
    temperature[i].innerHTML =
      Math.round(weatherData.daily[i].temp.day) + String.fromCharCode(176);

    //Change precipitation and low temperature
    precipitation[i].innerHTML += weatherData.daily[i].pop + "%";

    low[i].innerHTML +=
      Math.round(weatherData.daily[i].temp.min) + String.fromCharCode(176);
  }
}

setWeather();
