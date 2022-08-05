const income = document.getElementById("income");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const addButton = document.getElementById("add-expense-button");

const expenseTable = document.getElementsByClassName("expense-table")[0];

const incomeSummary = document.querySelector("div.summary-amount.income");

let expenseItems = [];

document.addEventListener("click", updateData);
addButton.addEventListener("click", addExpense);

function updateData() {
  if (income.value == "") incomeSummary.innerHTML = `$0`;
  else incomeSummary.innerHTML = `$${income.value}`;
}

function addExpense() {
  if (!expenseName.value == "" && !expenseAmount.value == "") {
    expenseItems.push(`
    <div class="expense">${expenseName.value}</div>
    <div>$${expenseAmount.value}</div>
    <div class="delete">
        <button name="delete-expense" class="delete-expense" onclick="deleteExpense(${expenseItems.length})">
            <img src="./images/trash.svg" alt="Tash" />
        </button>
    </div>
    `);
    expenseTable.innerHTML += expenseItems[expenseItems.length - 1];
  }
}

function deleteExpense(id) {
  expenseItems.splice(id, 1);
  expenseTable.innerHTML = "";
  if (expenseItems.length == 0) expenseTable.innerHTML = "";
  else {
    for (let i = 0; i < expenseItems.length; i++) {
      expenseTable.innerHTML += expenseItems[i];
    }
  }
}
