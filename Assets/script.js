// Assignment Code
var generateBtn = document.querySelector("#generate");
//four possible character variables
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specials = "?.><,:;}]{[+=_-)(*&^%$#@!~`";

//empty string that will contain the selected characters
var availableCharacters = [];



function generatePassword() {
  var passwordLength = prompt(
    "How long do you want your password to be? Min: 8 characters, Max: 128 characters"
  );
  console.log("your pw length is: " + passwordLength);

  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please choose number between 8-128 characters");
  }

  var confirmLowerCase = confirm("Do you want lower case letters?");
  console.log("lower case letters: " + confirmLowerCase);
  var confirmUpperCase = confirm("Do you want UPPER CASE LETTERS?");
  console.log("upper case letters: " + confirmUpperCase);
  var confirmNumbers = confirm("Do you want numbers?");
  console.log("numbers: " + confirmNumbers);
  var confirmSpecials = confirm("Do you want special characters?");
  console.log("special characters: " + confirmSpecials);

  if (confirmLowerCase) {
    availableCharacters = availableCharacters.concat(lowerCase);
  }

  if (confirmUpperCase) {
    availableCharacters = availableCharacters.concat(upperCase);
  }

  if (confirmNumbers) {
    availableCharacters = availableCharacters.concat(numbers);
  }

  if (confirmSpecials) {
    availableCharacters = availableCharacters.concat(specials);
  }
  console.log("available: " + availableCharacters);


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
