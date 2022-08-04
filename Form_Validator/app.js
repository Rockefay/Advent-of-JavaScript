const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

document.addEventListener("click", checkData);

function checkData() {
  if (!userName.value == "" && !userName.value == " ") {
    document.getElementsByClassName("name error")[0].innerHTML = "";
    document.getElementsByClassName(
      "name success"
    )[0].innerHTML = `<img src="./images/success.svg" alt="Success" />`;
  } else {
    document.getElementsByClassName("name success")[0].innerHTML = "";
    document.getElementsByClassName(
      "name error"
    )[0].innerHTML = `<img src="./images/error.svg" alt="Error" /> A name is required`;
  }

  if (!email.value == "" && !email.value == " " && validateEmail(email.value)) {
    document.getElementsByClassName("email error")[0].innerHTML = "";
    document.getElementsByClassName(
      "email success"
    )[0].innerHTML = `<img src="./images/success.svg" alt="Success" />`;
  } else {
    document.getElementsByClassName("email success")[0].innerHTML = "";
    document.getElementsByClassName(
      "email error"
    )[0].innerHTML = `<img src="./images/error.svg" alt="Error" /> Must enter a valid email`;
  }

  if (
    confirmPassword.value === password.value &&
    !confirmPassword.value == " "
  ) {
    document.getElementsByClassName("confirm-password error")[0].innerHTML = "";
    document.getElementsByClassName(
      "confirm-password success"
    )[0].innerHTML = `<img src="./images/success.svg" alt="Success" />`;
  } else {
    document.getElementsByClassName("confirm-password success")[0].innerHTML =
      "";
    document.getElementsByClassName(
      "confirm-password error"
    )[0].innerHTML = `<img src="./images/error.svg" alt="Success" /> Password and confirm password must match`;
  }

  if (password.value == "" && !confirmPassword.value == "")
    document.getElementsByClassName(
      "confirm-password error"
    )[0].innerHTML = `<img src="./images/error.svg" alt="Success" /> Password and confirm password must match`;
  else if (password.value == "") {
    document.getElementsByClassName("confirm-password error")[0].innerHTML = "";
    document.getElementsByClassName("confirm-password success")[0].innerHTML =
      "";
  }
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
