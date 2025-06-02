
//Declaring a variable & prompting for the username
let username = prompt("Enter your name: ");
validateUsername(username);

//Re prompt the user for a valid input that meets the criteria set for a username
while (validateUsername(username) === false){
    username = prompt("Invalid username. Please enter a valid username containing 10 characters:")
}

//Decalaring the variable & prompting the user for password 
let password = prompt("Enter your password:");

//Re prompt the user for a valid input that meets the criteria set for the password
while (validatePassword(password) === false){
    password = prompt("Invalid password. try again. Password must be six characters long")
}
 
//Output the username and password
console.log("Username: " + username + "\nPassword: " + password);
console.log("You have successfully logged in!");


//Function to validate the username - this check if the username is null, empty or greater than 10 characters
function validateUsername(username){
    if(username === null) {
        return true
    }

    if(username === "") {
        return false
    }

    if (username.length > 10) {
        return false;
    }else {
        return true;
    }
}

//Function to validate the password - this checks if the password is null, empty or less than 6 characters
function validatePassword(password) {
    if (password === null){
        return true;
    }

    if (password === ""){
        return false;
    }

    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}