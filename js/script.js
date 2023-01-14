// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function that prompts user for password criteria after which it creates a nested array of all the characters
// user decided to pick for their password.

function getPasswordOptions() {
  let choicesArr = [];
  let finalChoiceArr = [];
  let choice = prompt('Enter number of characters between 10 and 64');

  finalChoiceArr.push(choice)

  // This if statement checks if the number of characters user asked 
  // for is in the required range, if it is then it moves forward with asking
  // for the remaining options whilst pushing answers into array.
  if ( choice >= 10 && choice <= 64 ) {
    choicesArr.push(
      confirm('Would you like Lowercase letters?'),
      confirm('Would you like Uppercase letters?'),
      confirm('Would you like Numbers?'),
      confirm('Would you like Special Characters?')
    );
    
    // These 4 if statements check what options the user picked and creates a nested array
    // of all the characters the user decided on and returns the final choices array.
    if (choicesArr[0]) {
      finalChoiceArr.push(lowerCasedCharacters);
    };
    if (choicesArr[1]) {
      finalChoiceArr.push(upperCasedCharacters);
    };
    if (choicesArr[2]) {
      finalChoiceArr.push(numericCharacters);
    };
    if (choicesArr[3]) {
      finalChoiceArr.push(specialCharacters);
    };

    return finalChoiceArr;
  } else {
    alert('Why you gotta be like that...')
    return false
  }
}

// Function for randomising an array.


function shuffleArr(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

// Function to create an array with random elements from user selecter arrays
function selectRandElm(numSplit, options) {
  if (options !== undefined) {
    for (let j = 0; j < numSplit; j++) {
      finalPassArr.push(options[Math.floor(Math.random() * (options.length - 0) + 0)])
    };
  } else {
    return null;
  }
}
let finalPassArr = [];


// Function to generate password with user input
function generatePassword() {
  let passOptions = getPasswordOptions();
  let totalNumSplit = Math.ceil(passOptions[0] / passOptions.length);
  
  let finalPassword = "";

  // let thisIsThing = passOptions[3].length

  if (passOptions === false) {
    return 'No password for you! Try again!'
  } else {
    console.log(`this is the totalNumSplit ${totalNumSplit}`)
    // console.log(`this is the passOptions[?].length: ${thisIsThing}`)

    // TODO: fix this bug that happens here, need to have a way of calling this based on what the user wants
    // TODO: and not hard coding the values in there.... a loop who..?

    selectRandElm(totalNumSplit, passOptions[1]);
    selectRandElm(totalNumSplit, passOptions[2]);
    selectRandElm(totalNumSplit, passOptions[3]);
    selectRandElm(totalNumSplit, passOptions[4]);

    // This shuffles array with final characters to make sure they are in a random order.
    finalPassArr = shuffleArr(finalPassArr);

    if (finalPassArr.length == passOptions[0]) {
      for (let i = 0; i < finalPassArr.length; i++) {
        finalPassword = finalPassword + finalPassArr[i].toString();
      };
    } else if (finalPassArr.length < passOptions[0]) {
      let diff = passOptions[0] - finalPassArr.length;
      for (let i = 0; i < diff; i++) {
        finalPassArr.push(numericCharacters[Math.floor(Math.random() * (numericCharacters.length - 0) + 0)])
      };
      for (let i = 0; i < finalPassArr.length; i++) {
        finalPassword = finalPassword + finalPassArr[i].toString();
      };
      finalPassArr = shuffleArr(finalPassArr);
    } else if (finalPassArr.length > passOptions[0]) {
      finalPassArr.pop();
      for (let i = 0; i < finalPassArr.length; i++) {
        finalPassword = finalPassword + finalPassArr[i].toString();
      };
    }



    console.log(`This is the finalPassArr: ${finalPassArr}`)
    console.log(`This is the finalPassword: ${finalPassword}`)

    return finalPassword;
  }

};

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);