const verifyButton = document.getElementsByClassName("verify-button")[0];
const verification = document.getElementsByClassName("verification");
const autCode = "1234";

//Changing position after giving one character
function nextNumber(place, nextPlace) {
  if (place.value.length == place.maxLength)
    document.getElementById(nextPlace).focus();
}

//Pasting the code
for (let i = 0; i < verification.length; i++) {
  verification[i].addEventListener("paste", (e) => {
    var clipboardData, pastedData;

    e.stopPropagation();
    e.preventDefault();

    clipboardData = e.clipboardData || window.clipboardData;
    pastedData = clipboardData.getData("Text");

    for (let index = i, j = 0; index < verification.length; index++, j++) {
      verification[index].value = pastedData[j];
    }
    verification[verification.length - 1].focus();
  });
}

//Checking if the code is correct
verifyButton.addEventListener("click", () => {
  let userCode = "";
  for (let i = 0; i < verification.length; i++) {
    userCode += verification[i].value;
  }
  if (userCode == autCode) alert("AUTHORIZATION SUCCESSFUL");
  else alert("AUTHORIZATION UNSUCCESSFUL");
});
