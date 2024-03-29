const table = document.querySelector("tbody");
const sortButtons = document.querySelectorAll("button.sort");

const currentPage = document.getElementById("currentPage");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");

const data = [
  {
    id: 1,
    name: "Cameron Williamson",
    email: "cameron.wiliamson@example.com",
    title: "Software Developer",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Project Manager",
  },
  {
    id: 3,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 4,
    name: "Wade Warren",
    email: "wade.warren@example.com",
    title: "Software Tester",
  },
  {
    id: 5,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 7,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 8,
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 9,
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    title: "Software Tester",
  },
  {
    id: 10,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 11,
    name: "Willie Jennings",
    email: "willie.jennings@example.com",
    title: "Team Leader",
  },
  {
    id: 12,
    name: "Neveah Simmons",
    email: "neveah.simmons@example.com",
    title: "Team Leader",
  },
  {
    id: 13,
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    title: "Software Tester",
  },
  {
    id: 14,
    name: "Debbe Baker",
    email: "debbe.baker@example.com",
    title: "Software Developer",
  },
  {
    id: 15,
    name: "Ronald Richards",
    email: "ronald.richards@example.com",
    title: "Software Developer",
  },
  {
    id: 16,
    name: "Deanna Curtis",
    email: "deanna.curtis@example.com",
    title: "Scrum Master",
  },
  {
    id: 17,
    name: "Felicia Reid",
    email: "felicia.reed@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 18,
    name: "Jessie Alexander",
    email: "jessie.alexander@example.com",
    title: "Project Manager",
  },
  {
    id: 19,
    name: "Sam Smith",
    email: "sam.smith@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 20,
    name: "Eleanor Rigby",
    email: "eleanor.rigby@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 21,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    title: "Team Leader",
  },
  {
    id: 22,
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    title: "Team Leader",
  },
  {
    id: 23,
    name: "Jim Parks",
    email: "jim.parks@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 24,
    name: "Susanne Ford",
    email: "susanne.ford@example.com",
    title: "Software Developer Manager",
  },
  {
    id: 25,
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    title: "Project Manager",
  },
  {
    id: 26,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Software Developer",
  },
  {
    id: 27,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Software Tester",
  },
  {
    id: 28,
    name: "Karen MacAfee",
    email: "karen.macafee@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 29,
    name: "Dianne Russell",
    email: "dianne.russell@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 30,
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    title: "Scrum Master",
  },
];
const pageSize = 10;

let currentData = data.slice(0, pageSize);

printData();
previousButton.onclick = () => changePage(-1);
nextButton.onclick = () => changePage(1);
for (let i = 0; i < sortButtons.length; i++) {
  sortButtons[i].onclick = () => sortData(sortButtons[i].getAttribute("id"));
}

function printData() {
  table.innerHTML = currentData
    .map(
      (element) => `
    <tr id="person-${element.id}">
        <td>${element.id}</td>
        <td class="name">
            <input type="text" disabled="disabled" name="person-name-${element.id}" value="${element.name}" />
        </td>
        <td>
            <input type="text" disabled="disabled" name="person-email-${element.id}" value="${element.email}" />
        </td>
        <td>
            <input type="text" disabled="disabled" name="person-title-${element.id}" value="${element.title}" />
        </td>
        <td>
            <button class="update" name="person-update-${element.id}" id="personUpdate${element.id}" onclick="saveData(${element.id})">
                <img src="./images/update.svg" alt="Update" class="update" />
            </button>
            <button class="edit" name="person-edit-${element.id}" id="personEdit${element.id}" onclick="editData(${element.id})">
                <img src="./images/edit.svg" alt="Edit" class="edit" />
            </button>
        </td>
    </tr>
    `
    )
    .join("");
}

function changePage(direction) {
  const pageNumber = parseInt(currentPage.value) + direction;
  if (pageNumber >= 1 && pageNumber <= 3) {
    currentPage.value = pageNumber;
    currentData = data.slice(
      pageSize * (pageNumber - 1),
      pageSize * pageNumber
    );
    printData();
    clearButtons();
  }
}

function editData(index) {
  document.getElementById(`person-${index}`).classList.add("edit");
  document
    .querySelector(`input[name="person-name-${index}"] `)
    .removeAttribute("disabled");
  document
    .querySelector(`input[name="person-email-${index}"] `)
    .removeAttribute("disabled");
  document
    .querySelector(`input[name="person-title-${index}"] `)
    .removeAttribute("disabled");
}

function saveData(index) {
  document.getElementById(`person-${index}`).classList.remove("edit");
  document
    .querySelector(`input[name="person-name-${index}"] `)
    .setAttribute("disabled", "disabled");
  document
    .querySelector(`input[name="person-email-${index}"] `)
    .setAttribute("disabled", "disabled");
  document
    .querySelector(`input[name="person-title-${index}"] `)
    .setAttribute("disabled", "disabled");

  data[index - 1].name = document.querySelector(
    `input[name="person-name-${index}"] `
  ).value;
  data[index - 1].email = document.querySelector(
    `input[name="person-email-${index}"] `
  ).value;
  data[index - 1].title = document.querySelector(
    `input[name="person-title-${index}"] `
  ).value;
}

function sortData(dataType) {
  const button = document.querySelector(`button#${dataType}`);
  if (button.classList.contains("ascending")) {
    clearButtons();
    button.classList.remove("ascending");
    button.classList.add("descending");

    currentData = currentData.sort((a, b) =>
      a[dataType] > b[dataType] ? 1 : -1
    );
  } else {
    clearButtons();
    button.classList.remove("descending");
    button.classList.add("ascending");

    currentData = currentData.sort((a, b) =>
      a[dataType] > b[dataType] ? -1 : 1
    );
  }

  printData();
}

const clearButtons = () => {
  const buttons = document.querySelectorAll("button.sort");
  buttons.forEach((button) => {
    button.classList.remove("ascending");
    button.classList.remove("descending");
  });
};
