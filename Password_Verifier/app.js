const verifyButton = document.getElementsByClassName("verify-button")[0];
const verification = document.getElementsByClassName("verification");
const autCode = "1234";

//Changing position after giving one character
function nextNumber(place, nextPlace) {
  if (place.value.length == place.maxLength)
    document.getElementById(nextPlace).focus();
}
