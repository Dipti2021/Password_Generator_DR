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
var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//Function declaration
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
  if (!lower && !upper && !num && !sym) {
    pwd = alert("See you soon 👍");
  }
  else if (lower && upper && num && sym) {
    pwd = lower_alphabets.concat(upper_alphabets, numbers, symbols);
    
    
  } else if (lower && upper && num) {
    pwd  = lower_alphabets.concat(upper_alphabets, numbers);
    
  } else if (lower && upper && sym) {
    pwd  = lower_alphabets.concat(upper_alphabets, symbols);
    
  } else if (lower && num && sym) {
    pwd  = lower_alphabets.concat(numbers, symbols);
    
  } else if (upper && num && sym) {
    pwd  = upper_alphabets.concat(numbers, symbols);
   
  } else if (lower && upper) {
    pwd  = lower_alphabets.concat(upper_alphabets);
    
  } else if (lower && num) {
    pwd  = lower_alphabets.concat(numbers);
    
  } else if (lower && sym) {
    pwd  = lower_alphabets.concat(symbols);
   
  } else if (upper && num) {
    pwd  = upper_alphabets.concat(numbers);
    
  } else if (upper && sym) {
    pwd  = upper_alphabets.concat(symbols);
   
  } else if (num && sym) {
   pwd  = numbers.concat(symbols);
   
  } else if (lower) {
    pwd  = lower_alphabets;
   
  } else if (upper) {
    pwd  = upper_alphabets;
    
  } else if (num) {
    pwd  = numbers;
    
  } else if (sym) {
    pwd  = symbols;
    
  }
  else{
    alert("Let's proceed with creating your password 😊 ");
  };
  

  //combining and genereating a random password which will be stored and returned as a new variable
  for (var i = 0; i < pwd_length; i++) {
    empty_pwd += pwd[Math.floor(Math.random() * pwd.length)];
    console.log(empty_pwd);
  }
  return empty_pwd;


}  
