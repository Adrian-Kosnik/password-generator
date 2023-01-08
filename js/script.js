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

// Function for getting a random element from an array
function getRandom(arr) {
  let arrLen = arr.length
  let ranIndex =  arr[Math.floor(Math.random() * (arrLen - 0) + 0)]

  return ranIndex;
}

// Function to generate password with user input
function generatePassword() {
  let passOptions = getPasswordOptions()
  let optionsArr = []

  if (passOptions === false) {
    return 'No password for you! Try again!'
  } else {
    for (let i = 1; i <= passOptions[0]; i++) {
      if (passOptions[i] === true) {
        optionsArr.push(lowerCasedCharacters)
      }
    }
  }

} 

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);