const original_password = "Pass1234"; // Define the original password
const retype_password = "Pass1234"; // Define the retyped password
const username = "John"; // Define the username
const user_info = {}; // Object to store user information

// Function to check if a letter is uppercase
function isUpperCase(letter) {
    return letter === letter.toUpperCase() && letter !== letter.toLowerCase();
}

// Function to check if a character is numeric
function isNumeric(character){
    return !isNaN(parseInt(character)) && isFinite(character);
}

// Function to reverse a string
function reverseString(password) {
    let reversedPassword = "";
    for (let i = password.length - 1; i >= 0; i--) { // Iterate through the password in reverse order and build the reversed string
        reversedPassword += password[i];
    }
    return reversedPassword;
}

// Function to validate the password
function validatePassword(username, original_password, retype_password){
    // Initialize flags for uppercase, lowercase, presence of a number, and differences between passwords
    let uppercase = 0;
    let lowercase = 0;
    let number_present = 0;
    let different = 0;
    if (original_password.length == retype_password.length){ // Check if the lengths of the original and retyped passwords are the same
        if (retype_password.length < 8){ // Check if the length of the password is less than 8
            return "Insufficient Number of Characters!";
        } else {
            // Iterate through each character of the retyped password
            for (let retype_letter = 0; retype_letter < retype_password.length; retype_letter++){
                // Check if characters at corresponding positions in the original and retyped passwords are different
                if(original_password[retype_letter] != retype_password[retype_letter]){
                    different = 1;
                    break;
                }
                // Check if the character is uppercase or lowercase
                if(isUpperCase(retype_password[retype_letter])){
                    uppercase = 1;
                } else {
                    lowercase = 1;
                }
                // Check if the character is a number
                if(isNumeric(retype_password[retype_letter])){
                    number_present = 1;
                }
            }
            // Check if all password requirements are met
            if (uppercase == 1 && lowercase == 1 && number_present == 1 && different == 0){
                // Reverse the original password
                let reversedPassword = reverseString(original_password);
                // Store user information
                user_info.name = username;
                user_info.newpassword = reversedPassword;
                return user_info;
            } else if (different == 1 && number_present == 1) {
                return "Wrong Password!";
            } else {
                return "Invalid Password!";
            }
        }
    } else {
        return "Wrong Password!";
    }
}

// Call the validatePassword function and log the result
console.log(validatePassword(username, original_password, retype_password));