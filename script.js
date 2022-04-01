// Lowercase array
var optLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; // 0-25 (26 total)
console.log(optLowerCase);
// Uppercase array
var optUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; // 0-25 (26 total)
console.log(optUpperCase);
// Numbers array
var optNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]; // 0-9 (10 total)
console.log(optNumbers);
// Special Characters array
var optSpecialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]; // 0-26 (27 total)
console.log(optSpecialChars);
// Empty array
var options = [];
var pass = [];
console.log(options);


// Booleans
var pwLower = true;
var pwUpper = true;
var pwNumber = true; 
var pwSpecial = true;



function generatePassword(){
    //TODO: your code goes here
    // Ask user for length of password
    var pwLength = prompt("How many characters do you want your password to have? (Number must be between 8-128)");
    console.log(pwLength);
    if (pwLength < 8 || pwLength > 128) {
        var errorMsg = alert("The number you've chosen is outside of the parameters. Please try again.");
        return;
    }
    if (pwLength >= 8 && pwLength <= 128) {
        // Confirm inclusion of lowercase letters
        var pwLower = confirm("Include lowercase letters?");
        // Confirm inclusion of uppercase letters
        var pwUpper = confirm("Include uppercase letters?");
        // Confirm inclusion of numbers
        var pwNumber = confirm("Include numbers?");
        // Confirm inclusion of special characters
        var pwSpecial = confirm("Include special characters?");
    }
    // If all are denied 
    if (!pwLower && !pwUpper && !pwNumber && !pwSpecial) {
        var errorMsg2 = alert("You must choose at lease one option. Please try again.");
        var pwLower = confirm("Include lowercase letters?");
        var pwUpper = confirm("Include uppercase letters?");
        var pwNumber = confirm("Include numbers?");
        var pwSpecial = confirm("Include special characters?");
    }
    // If all are confirmed
    if (pwLower && pwUpper && pwNumber && pwSpecial) {
        var bank = options.concat(optLowerCase, optUpperCase, optNumbers, optSpecialChars);
    }
    // If one is denied
    else if (pwLower && pwUpper && pwNumber) {
        var bank = options.concat(optLowerCase, optUpperCase, optNumbers);
    }
    else if (pwLower && pwUpper && pwSpecial) {
        var bank = options.concat(optLowerCase, optUpperCase, optSpecialChars);
    }
    else if (pwLower && pwNumber && pwSpecial) {
        var bank = options.concat(optLowerCase, optNumbers, optSpecialChars);
    }
    else if (pwUpper && pwNumber && pwSpecial) {
        var bank = options.concat(optUpperCase, optNumbers, optSpecialChars);
    }
    // if two are denied
    else if (pwLower && pwUpper) {
        var bank = options.concat(optLowerCase, optUpperCase);
    }
    else if (pwLower && pwNumber) {
        var bank = options.concat(optLowerCase, optNumbers);
    }
    else if (pwLower && pwSpecial) {
        var bank = options.concat(optLowerCase, optSpecialChars);
    }
    else if (pwUpper && pwNumber) {
        var bank = options.concat(optUpperCase, optNumbers);
    }
    else if (pwUpper && pwSpecial) {
        var bank = options.concat(optUpperCase, optSpecialChars);
    }
    else if (pwNumber && pwSpecial) {
        var bank = options.concat(optNumbers, optSpecialChars);
    }
    // if three are denied
    else if (pwLower) {
        var bank = options.concat(optLowerCase);
    }
    else if (pwUpper) {
        var bank = options.concat(optUpperCase);
    }
    else if (pwNumber) {
        var bank = options.concat(optNumbers);
    }
    else if (pwSpecial) {
        var bank = options.concat(optSpecialChars);
    }

    console.log(bank); 

    //This is where I get completely lost.
    // I know I need to have a for loop with the user input length & use the math element that pulls a random character out of the bank array I created. I've tried several setups and I can't figure it out. 
    
    for (let i = 0; i < pwLength; i++) {
    bank[Math.floor(Math.random() * pwLength)];
    }
        
    
    console.log(bank); 
    

    return "password"
  }
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

