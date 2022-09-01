//This was done with the help of the Great TA Paul Cwick

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  //availableCharacters will store the alphabet and we will randomly pick from var
  var availableCharacters = '';
  var completedPassword = '';

  //Var's for confirming upper and lowercase, number, and special choice
  var lowerChoice = confirm(`Would you like to have lowercase charecters in your password?`);
  var upperChoice = confirm(`Would you like to include uppercase charecters in you password?`);
  var numChoice = confirm(`Would you like to include a numeric charecter in you password?`);
  var specialChoice = confirm(`Would you like to include a speacial charecter in your password?`);


  //if all of these choices are false, there will be 'undefined' written the same number of times as passLength in the box
  if( !lowerChoice && !upperChoice && !numChoice && !specialChoice )
  {
    var falseChoice = prompt(`You must pick one option in order to generate a password\nWould you like to try again?`);
    if(falseChoice.toUpperCase() === "Y")
    {
      generatePassword();
    }
    else{
      alert(`Goodbye.`);
    }
  }
  
  //User chooses size of pass var
  var passLength = prompt(`What length would you like your Password to be?\nPlease pick between 8-128`);
  console.log(passLength);

  if( (passLength < 8) || (passLength > 128) ){
    var errChoice = prompt(`The password length chossen was ${passLength}, password length must be between 8-128.\nWould you like to try again?`);
    if(errChoice.toUpperCase() === "Y")
    {
      generatePassword();
    }
    else{
      alert(`Goodbye.`);
    }
    // completedPassword = 'Please hit "Generate Password" to try again.';
    // return completedPassword;
  } 
  else if ( (passLength >= 8) && (passLength <= 128) ){
    alert(`The password length ${passLength} is in the desired range.`);

    //if these are true(auto by clicking 'ok') then store these charecters, if its not true then it doesn't store
    if(lowerChoice){
      availableCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase();
    }
    console.log(availableCharacters);
    if(upperChoice){
      availableCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    console.log(availableCharacters);
    if(numChoice){
      availableCharacters += '0123456789';
    }
    console.log(availableCharacters);
    if(specialChoice){
      availableCharacters += '!@#$%^&*_+-=`~';
    }
    console.log(availableCharacters);
    
     
    
    //for every number iteration of passLength...
    for(var i = 0; i < passLength; i++){
      //generate a random rounded down number based on the length of the availableCharacters...
      var randomIndex = Math.floor(Math.random() * availableCharacters.length);
      console.log(randomIndex);

      //With that generated number, go to the same number index in list of availableCharacters and grab it...
      var randomCharacter = availableCharacters[randomIndex];
      console.log(randomCharacter);
      
      //And add it to the completedPassword
      completedPassword+= randomCharacter;
      //console will print the same number of letters as passLength
      console.log(completedPassword);
    }
    return completedPassword;
  }

}





// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters//

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
