// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Query selectors
var generateBtn = document.querySelector("#generate");
var up = false;
var low = false;
var spec = false;

var initVal = "";
var upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var spec = ['!','@','#','$','%','^','&','*','?',"/"]

//  Goes through array and chooses random characters
function goThrough(arr, len){
  for (var i = 0, n = arr.length; i < len; ++i) {
    initVal += arr[Math.floor(Math.random() * n)];
  }
}

// Write password to the #password input
 function promptChecker1(popUp) {
    if (popUp.length == 0 || typeof(popUp) == typeof(String)) {
      length = prompt("Please enter a number betweem 8 and 120 characters ");
    }
  }
function writePassword() {
  var length = prompt("Length of Password");
  promptChecker1(length)

  var upperSel = prompt("Would you like to use uppercase characters?");

  var lowSel = prompt("Would you like to use lowercase characters?");
  var specSel = prompt("Would you like to use special characters?");
  var password = generatePassword(length, upperSel, lowSel, specSel);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(len) {
  
  var length = Math.floor(len) / 3;

  
  goThrough(upper,length)
  goThrough(lower,length)
  goThrough(spec,length)

  console.log(initVal);
  return initVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
