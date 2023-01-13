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

// Function to prompt user for password options

// this function need to give me the array of arrays that the person wants
function getPasswordOptions() {
  let choicesArr = []

  let choice = prompt('Enter number of characters between 10 and 64')
  
  if ( choice >= 10 && choice <= 64 ) {
    choicesArr.push(
      choice,
      confirm('Would you like Lowercase letters?'),
      confirm('Would you like Uppercase letters?'),
      confirm('Would you like Numbers?'),
      confirm('Would you like Special Characters?')
    )
    return choicesArr;
  } else {
    alert('Why you gotta be like that...')
    return false
  }
}

// Function for converting user choices into nested character array that coesponds to what the user picked.


function getOptionArr(arr) {
  let userChoices = {
    numOfChar: arr[0],
  };
  if (arr[1]) {
    userChoices["lowerCaseChar"] = arr[1];
  };
  if (arr[2]) {
    userChoices["upperCaseChar"] = arr[2];
  };
  if (arr[3]) {
    userChoices["numericChar"] = arr[3];
  };
  if (arr[4]) {
    userChoices["specialChar"] = arr[4];
  };
};


// Function for getting a random element from an array
function getRandomArrElem(arr) {
  let arrLen = arr.length
  let ranIndex =  arr[Math.floor(Math.random() * (arrLen - 0) + 0)]

  return ranIndex;
};

// Function to generate password with user input
function generatePassword() {
  let passOptions = getPasswordOptions();
  let choiceCharArr = getOptionArr(passOptions);
  let numOfChar = passOptions[0];

  if (passOptions === false) {
    return 'No password for you! Try again!'
  } else {
    console.log(`This is passOptions: ${passOptions}`)
    console.log(`This is choiceCharArr: ${choiceCharArr}`)
    console.log(`This is numOfChar: ${numOfChar}`)
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