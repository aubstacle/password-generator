// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "?.><,:;}]{[+=_-)(*&^%$#@!~`";

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be? Min: 8 characters, Max: 128 characters");

  if (passwordLength < 8 || passwordLength > 128) {
    prompt("Please select a password length between 8-128 characters")
  }

  var confirmLowerCase = confirm("Do you want lower case letters?");

  var confirmUpperCase = confirm("Do you want UPPER CASE LETTERS?");

  var confirmNumbers = confirm("Do you want numbers?");

  var confirmSpecials = confirm("Do you want special characters?");

  



}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
