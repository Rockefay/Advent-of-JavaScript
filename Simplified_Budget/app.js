const income = document.getElementById("income");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const addButton = document.getElementById("add-expense-button");

const expenseTable = document.getElementsByClassName("expense-table")[0];

const incomeSummary = document.querySelector("div.summary-amount.income");
const expensesSummary = document.querySelector("div.summary-amount.expenses");
const balanceSummary = document.querySelector("div.summary-amount.balance");

let expenseItems = [];

document.addEventListener("click", updateData);
addButton.addEventListener("click", addExpense);

function updateData() {
  if (income.value == "") incomeSummary.innerHTML = `$0`;
  else incomeSummary.innerHTML = `$${income.value}`;
  calculateBalance();
}

function addExpense() {
  if (!expenseName.value == "" && !expenseAmount.value == "") {
    expenseItems.push(`
    <div class="expense">${expenseName.value}</div>
    <div>$${expenseAmount.value}</div>
    <div class="delete">
        <button name="delete-expense" class="delete-expense" onclick="deleteExpense(${expenseItems.length}, ${expenseAmount.value})">
            <img src="./images/trash.svg" alt="Tash" />
        </button>
    </div>
    `);
    expenseTable.innerHTML += expenseItems[expenseItems.length - 1];

    expensesSummary.innerHTML = ` $${
      parseInt(expensesSummary.innerHTML.replace("$", "")) +
      parseInt(expenseAmount.value)
    }`;
    calculateBalance();
  }
}

function deleteExpense(id, value) {
  expensesSummary.innerHTML = ` $${
    parseInt(expensesSummary.innerHTML.replace("$", "")) - parseInt(value)
  }`;
  if (id >= expenseItems.length) id = expenseItems.length - 1;
  expenseItems.splice(id, 1);
  expenseTable.innerHTML = "";
  if (expenseItems.length == 0) expenseTable.innerHTML = "";
  else {
    for (let i = 0; i < expenseItems.length; i++) {
      expenseTable.innerHTML += expenseItems[i];
    }
  }
  calculateBalance();
}

function calculateBalance() {
  let balance =
    parseInt(incomeSummary.innerHTML.replace("$", "")) -
    parseInt(expensesSummary.innerHTML.replace("$", ""));

  if (balance > 0) {
    balanceSummary.classList.remove("negative");
    balanceSummary.classList.add("positive");
    balanceSummary.innerHTML = `$${balance}`;
  } else if (balance == 0) {
    balanceSummary.classList.remove("positive");
    balanceSummary.classList.remove("negative");
    balanceSummary.innerHTML = `$${balance}`;
  } else {
    balanceSummary.classList.remove("positive");
    balanceSummary.classList.add("negative");
    balanceSummary.innerHTML = `-$${Math.abs(balance)}`;
  }
}
