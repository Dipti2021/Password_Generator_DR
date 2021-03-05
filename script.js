// Assignment Code
//Variable declarations
var pwd_length; 
var pwd='';
var empty_pwd=[]; 
var choice;
var lower;
var upper;
var num;
var sym;
//Arrays declaration
var lower_alphabets =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper_alphabets= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
//Function definition and function declaration
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Function calling
function generatePassword() {
  //prompting the number of character that can be used to generate the password
  pwd_length = prompt("Choose a number between 8 and 128 to determine the length of your password");
  //Different conditions for the length of the password
 if( pwd_length < 8 || pwd_length> 128 ||!pwd_length) {
  alert("Password length must be between 8-128 characters.Please try again 🥺");
  
  
  } else {
   lower= confirm("Will your password contain lower case alphabets?");
   upper= confirm("Will your password contain upper case alphabets?");
   num = confirm("Will your password contain numbers?");
   sym = confirm("Will your passwords contain special characters?");

   alert(`You will have ${pwd_length} characters in your password 🔑`);
       
  };

  
  

//combinations for generating the password using all the characters 
  // if none of the condition is true then the process will stop 
  if (!lower && !upper && !num && !sym) {
     pwd=alert("See you soon next time 👍");
  }
  else if (lower && upper && num && sym) {// if all the four conditions are true, then a password will be generated which will have all the four special  characters
    pwd = lower_alphabets.concat(upper_alphabets, numbers, symbols);
    
    
  } else if (lower && upper && num) {// if lower, upper and num conditions are true, then a password will be generated which will have these three special characters only
    pwd  = lower_alphabets.concat(upper_alphabets, numbers);
    
  } else if (lower && upper && sym) {// if lower, upper and sym conditions are true, then a password will be generated which will have these three special characters only
    pwd  = lower_alphabets.concat(upper_alphabets, symbols);
    
  } else if (lower && num && sym) {// if lower, sym and num conditions are true, then a password will be generated which will have these three special characters only
    pwd  = lower_alphabets.concat(numbers, symbols);
    
  } else if (upper && num && sym) {// if upper and num and sym conditions are true, then a password will be generated which will have these three special characters only
    pwd  = upper_alphabets.concat(numbers, symbols);
   
  } else if (lower && upper) {// if lower and upper conditions are true, then a password will be generated which will have these two special characters only
    pwd  = lower_alphabets.concat(upper_alphabets);
    
  } else if (lower && num) {// if lower and num conditions are true, then a password will be generated which will have these two special characters only
    pwd  = lower_alphabets.concat(numbers);
    
  } else if (lower && sym) { // if lower and sym conditions are true, then a password will be generated which will have these two special characters only
    pwd  = lower_alphabets.concat(symbols);
   
  } else if (upper && num) { // if upper and num conditions are true, then a password will be generated which will have these two special characters only
    pwd  = upper_alphabets.concat(numbers);
    
  } else if (upper && sym) {// if upper and sym conditions are true, then a password will be generated which will have these two special characters only
    pwd  = upper_alphabets.concat(symbols);
   
  } else if (num && sym) {// if num and num conditions are true, then a password will be generated which will have these two special characters only
   pwd  = numbers.concat(symbols);
   
  } else if (lower) {// if lower condition is true, then a password will be generated which will have only this special character
    pwd  = lower_alphabets;
   
  } else if (upper) {// if upper condition is true, then a password will be generated which will have only this special character
    pwd  = upper_alphabets;
    
  } else if (num) {// if num condition is true, then a password will be generated which will have only this special character
    pwd  = numbers;
    
  } else if (sym) {// if sym condition is true, then a password will be generated which will have only this special character
    pwd  = symbols;
    
  }
  else{
    alert("Let's proceed with creating your password 😊 ");
  };
  

  //combining and genereating a random password which will be stored and returned as a new variable
  //for loop will give us a value for the password length
  for (var i = 0; i < pwd_length; i++) {
    empty_pwd += pwd[Math.floor(Math.random() * pwd.length)];//math.random() function will generate a random float number which when multiplied with the password length will generate a new random length and math.floor() function will change that float number to its closest and greatest number variant.and a random password of that new enth will be generated.
    console.log(empty_pwd);
  }
  return empty_pwd;


}  
