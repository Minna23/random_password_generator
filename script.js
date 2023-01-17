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
  
  let length = parseInt(prompt("Please choose a number of characters between 10 and 64"))
    
  if (isNaN(length) === true) {
      length = prompt("Please choose a number");
      return;
  }
  if ((length < 10) || (length >=64)){
        alert("Your number must be between 10 and 64");
      return;
  }
    
  if ((length > 10) && (length <= 64)) {
  alert("Let me generate a password for you");
  }    
  let hasSpecialCharacters = confirm(
    "Click ok to confirm Speacial Characters")
  
  let hasNumericCharacters = confirm(
    "Click ok to confirm Numeric Characters")
  
  let hasLowerCasedCharacters = confirm(
    "Click ok to confirm Lower Case Characters")
  
  let hasUpperCasedCharacters = confirm(
    "Click ok to confirm Upper Case Characters")
   
  if (hasSpecialCharacters === false && 
    hasNumericCharacters === false && 
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false) {
    alert ("Must select at least one character type.")
    return;
  }
    
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters, 
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters
  }

  return passwordOptions;
}    

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  
  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if (options.hasSpecialCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }

  if (options.hasLowerCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }

  if (options.hasNumericCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }

  if (options.hasUpperCasedCharacters) {
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters));
  }
  console.log(options);
  console.log(guaranteedCharacter);
  console.log(possibleCharacter);


  for(let index = 0; index < options.length; index++) {
    var generated = getRandom(possibleCharacter);
    
    console.log(generated);
    result.push(generated);
  }

  console.log(result);
  return result.join("");
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