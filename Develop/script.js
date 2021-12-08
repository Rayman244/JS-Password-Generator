// Assignment Code
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// X THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// X THEN I select which criteria to include in the password
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
var num = false;
var spec = false;
var finalLen;

var initVal = "";

var numOfTypes = 0

const upper = [
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

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/"];

//  Goes through array and chooses random characters
function goThrough(arr) {
  for (var i = 0; i < finalLen; ++i) {
    initVal += arr[Math.floor(Math.random() * arr.length)];
  }
  console.log(initVal);
}
// Starts askng questions
function questions() {
  passLength = prompt("Password length 8 - 128 characters");
  console.log(passLength);
  if (passLength != "") {
    passLength = parseInt(passLength);
    console.log(passLength);
    passLength = Math.floor(passLength) / 4;
    console.log(passLength);
    finalLen = passLength;
    // Asks Upper Question
    addUpperQuest();
  } else if ((passLength = NaN || passLength < 8 || passLength > 128)) {
    alert("Please enter a number between 8 and 128 characters ");
    questions();
  }
  console.log(passLength);
}

// Upper Selection
function addUpperQuest() {
  // Uppercase Quest
  var upperSel = prompt("Would you like to use uppercase characters? y or n");
  if (upperSel != null) {
    if (upperSel.toLowerCase() == "y") {
      up = true;
      numOfTypes++
      goThrough(upper);
      // Asks Lower Question
      addLowQuestion();
    } else {
        // Asks Lower Question
        addLowQuestion();
    }
  }
  console.log(up);
}
// Lower Selection
function addLowQuestion() {
  // lowercase Question
  var lowSel = prompt("Would you like to use lowercase characters? y or n");

  if (lowSel != null) {
    if (lowSel.toLowerCase() === "y") {
      low = true;
      goThrough(lower);
      // Asks Number Question
      addNumQuestion();
    } else {
      // Asks Number Question
      addNumQuestion();
    }
  }
  console.log(low);
}

// Number Selection
function addNumQuestion() {
  // // number Question
  var numSel = prompt("Would you like to use numeric characters? y or n");

  if (numSel != null) {
    if (numSel.toLowerCase() === "y") {
      num = true;
      goThrough(nums);
      // Asks Special Question
      addSpecialQuestion()
    } else {
     // Asks Special Question
     addSpecialQuestion()
    }
  }
  console.log(num);
}

// Special Selection
function addSpecialQuestion(){
// // special Question
  var specSel = prompt("Would you like to use special characters? y or n");
  if (specSel != null) {
    if (specSel.toLowerCase() === "y") {
      spec = true;
      goThrough(special)
    } 
  }
  console.log(spec);
}
function makePassword(){

}
function writePassword() {
  questions();

  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  
  if(!up && !low && !num || !up && !low && !spec|| !up && !num&& !spec || !low && !num && !spec){
    alert("Please try again and enter more than one type of character");
    addUpperQuest();
  }else{
     console.log(initVal);
     
  }


 
  return initVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
