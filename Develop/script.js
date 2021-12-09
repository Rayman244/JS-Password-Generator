// Query selectors
var generateBtn = document.querySelector("#generate");
var up = false;
var low = false;
var num = false;
var spec = false;

var finalLen;
var passLength;
var initVal = "";
var scrambledPass = "";

var numOfTypes = 0;

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
var types = [upper, lower, nums, special];
// counts number of ways
function numWays(l) {
  l = parseInt(l);
  l = Math.floor(l / numOfTypes);
  finalLen = l;
}
//randomizes a string
function randomizar() {
  var newVal = (initVal = initVal.split(""));
  var valLength = initVal.length - 1;
  for (var i = valLength; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = initVal[i];
    initVal[i] = initVal[j];
    initVal[j] = tmp;
  }
  return (initVal = newVal.join(""));
}
//  Goes through array and chooses random characters
function goThrough(arr) {
  for (var i = 0; i < finalLen; ++i) {
    initVal += arr[Math.floor(Math.random() * arr.length)];
  }
}
// Starts askng questions
function questions() {
  passLength = prompt("Password length 8 - 128 characters");

  if (
    passLength != "" &&
    passLength != NaN &&
    passLength >= 8 &&
    passLength <= 128
  ) {
    // Asks Upper Question
    addUpperQuest();
  } else {
    alert("Please enter a number between 8 and 128 characters ");
    questions();
  }
}

// Upper Selection
function addUpperQuest() {
  // Uppercase Quest
  var upperSel = confirm("Would you like to use uppercase characters?");
  if (upperSel != null) {
    if (upperSel) {
      up = true;
      numOfTypes++;
      // Asks Lower Question
      addLowQuestion();
    } else {
      // Asks Lower Question
      addLowQuestion();
    }
  }
}
// Lower Selection
function addLowQuestion() {
  // lowercase Question
  var lowSel = confirm("Would you like to use lowercase characters?");

  if (lowSel != null) {
    if (lowSel) {
      low = true;
      numOfTypes++;
     
      // Asks Number Question
      addNumQuestion();
    } else {
      // Asks Number Question
      addNumQuestion();
    }
  }
}

// Number Selection
function addNumQuestion() {
  // // number Question
  var numSel = confirm("Would you like to use numeric characters?");

  if (numSel != null) {
    if (numSel) {
      num = true;
      numOfTypes++;
      // Asks Special Question
      addSpecialQuestion();
    } else {
      // Asks Special Question
      addSpecialQuestion();
    }
  }
}

// Special Selection
function addSpecialQuestion() {
  // // special Question
  var specSel = confirm("Would you like to use special characters?");
  if (specSel != null) {
    if (specSel) {
      spec = true;
      numOfTypes++
    }
  }
}
//logic
function creator() {
  numWays(passLength);
  if (numOfTypes >= 1) {
    if (up && low && num && spec) {
      goThrough(types[0]);
      goThrough(types[1]);
      goThrough(types[2]);
      goThrough(types[3]);
    } else if (up && low && num) {
      goThrough(types[0]);
      goThrough(types[1]);
      goThrough(types[2]);
    } else if (up && low && spec) {
      goThrough(types[0]);
      goThrough(types[1]);
      goThrough(types[3]);
    } else if (up && num && spec) {
      goThrough(types[0]);
      goThrough(types[2]);
      goThrough(types[3]);
    } else if (low && num && spec) {
      goThrough(types[1]);
      goThrough(types[2]);
      goThrough(types[3]);
    } else if (up && low) {
      goThrough(types[0]);
      goThrough(types[1]);
    } else if (up && num) {
      goThrough(types[0]);
      goThrough(types[2]);
    } else if (up && spec) {
      goThrough(types[0]);
      goThrough(types[3]);
    } else if (low && num) {
      goThrough(types[1]);
      goThrough(types[2]);
    } else if (low && spec) {
      goThrough(types[1]);
      goThrough(types[3]);
    } else if (num && spec) {
      goThrough(types[2]);
      goThrough(types[3]);
    } else if (up) {
      finalLen = passLength;
      goThrough(types[0]);
    } else if (low) {
      goThrough(types[1]);
    } else if (num) {
      goThrough(types[1]);
    } else if (spec) {
      goThrough(types[1]);
    }
  } else {
    alert("please enter one or more character type");
    addUpperQuest;
  }
}

function writePassword() {
  reset()
  questions();

  // Write password to the #password input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function reset() {
  initVal = "";
  scrambledPass = "";
  numOfTypes = 0;
}
function generatePassword() {
  creator();
  randomizar();

  return initVal;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
