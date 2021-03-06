const month = document.getElementsByClassName("month")[0];
const day = document.getElementsByClassName("day");
const dayOfWeek = document.getElementsByClassName("day-of-week");
const previous = document.getElementsByClassName("previous")[0];
const next = document.getElementsByClassName("next")[0];

const monthNames = {
  0: { name: "January", length: 31 },
  1: { name: "February", length: 28 },
  2: { name: "March", length: 31 },
  3: { name: "April", length: 30 },
  4: { name: "May", length: 31 },
  5: { name: "June", length: 30 },
  6: { name: "July", length: 31 },
  7: { name: "August", length: 31 },
  8: { name: "September", length: 30 },
  9: { name: "October", length: 31 },
  10: { name: "November", length: 30 },
  11: { name: "December", length: 31 },
};

const currentDate = new Date();
let chosenDate = currentDate;

previous.addEventListener("click", () => {
  if (chosenDate.getMonth() - 1 >= 0) {
    chosenDate = new Date(
      chosenDate.getFullYear(),
      chosenDate.getMonth() - 1,
      chosenDate.getDate()
    );
  } else {
    chosenDate = new Date(
      chosenDate.getFullYear() - 1,
      11,
      chosenDate.getDate()
    );
  }
  clearCalendar();
  showCalendar(chosenDate.getFullYear(), chosenDate.getMonth());
});

next.addEventListener("click", () => {
  if (chosenDate.getMonth() + 1 <= 11) {
    chosenDate = new Date(
      chosenDate.getFullYear(),
      chosenDate.getMonth() + 1,
      chosenDate.getDate()
    );
  } else {
    chosenDate = new Date(
      chosenDate.getFullYear() + 1,
      0,
      chosenDate.getDate()
    );
  }
  clearCalendar();
  showCalendar(chosenDate.getFullYear(), chosenDate.getMonth());
});

showCalendar(chosenDate.getFullYear(), chosenDate.getMonth());

function showCalendar(chosenYear, chosenMonth) {
  month.innerHTML = `${chosenYear} - ${monthNames[chosenMonth].name}`;

  const firstDayOfMonth = getfirstDayOfMonth(chosenYear, chosenMonth);

  let weekDay = firstDayOfMonth.getDay();
  let monthLength = monthNames[chosenMonth].length;

  if (chosenDate.getFullYear() % 4 == 0 && chosenDate.getMonth() == 1)
    monthLength++;

  for (let i = 0, j = 1; i < day.length; i++) {
    if (i == weekDay && j <= monthLength) {
      day[i].innerHTML = j;
      weekDay++;
      j++;
    }
    if (
      chosenYear == currentDate.getFullYear() &&
      chosenMonth == currentDate.getMonth() &&
      j == currentDate.getDate()
    )
      day[i + 1].classList.add("today");
  }
}

function clearCalendar() {
  for (let i = 0; i < day.length; i++) {
    day[i].innerHTML = "";
    if (day[i].classList.contains("today")) day[i].classList.remove("today");
  }
}

function getfirstDayOfMonth(year, month) {
  return new Date(year, month, 1);
}
