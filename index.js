// This is a simple JavaScript program that prompts the user for their name and password
//userName
let userName = prompt("Enter your name: ");

function usersName(){
    if (usersName >= 10){
     return prompt("Enter your name: ");   
    } 
}

//userPassword
let password = prompt("Enter your Password: ");

function userPassword(){
    if (password.length >= 10){
        return prompt("Enter your Password: ");
    }
}
