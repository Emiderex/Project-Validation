function displayDetails(){
    //Creating a mini database with object which displays user details after inmputting username and password
    const userDatabase = {
        "Seyi09": {
            firstname : "Seyishey",
            lastname : "Akinyemi",
            Email : "seyiakin@gmail.com",
            accountActive : true,
            password : "seyi1234"
        },
        "John#2": {
            firstname : "John",
            lastname : "Freymann",
            Email : "JohnFreyman@gmail.com",
            accountActive : true,
            password : "john1234"
        },
        "Michael21": {
            firstname : "Michael",
            lastname : "Chinedu",
            Email : "MikeCH@gmail.com",
            accountActive : false,
            password : "mike1234"
        },
        "Robert#$": {
            firstname : "Robert",
            lastname : "Tuyishimire",
            Email : "RobertTuyi@yahoo.com",
            accountActive : true,
            password : "robert1234"
        }
    }
    
    //Declaring a variable & prompting for the username
    let username = prompt("Enter your name: ");
    validateUsername(username);

    //Re prompt the user for a valid input that meets the criteria set for a username
    while (validateUsername(username) === false){
        username = prompt("Invalid username. Please enter a valid username containing 10 characters:")
    }

    if (username == null){
        return;
    }

    //Decalaring the variable & prompting the user for password 
    let password = prompt("Enter your password:");

    //Re prompt the user for a valid input that meets the criteria set for the password
    while (validatePassword(password) === false){
        password = prompt("Invalid password. try again. Password must be six characters long")
    }

    if (password == null){
        return;
    }

    let passwordConfirm = prompt("Please confirm your password:");
    
   while (passwordConfirm !== password){
        passwordConfirm = prompt("Passwords do not match. Re-enter your password:");
    }

    if (passwordConfirm == null){
        return;
    }
    
    const user = userDatabase[username];
    if ( user == undefined) {
        alert("User not found. Please try again.");
        return;
    } 

    //Check if the password matches the user in the database
     alert (`
         Welcome ${username}
         Below are your details: 
         Firstname: ${user.firstname}
         Lastname: ${user.lastname}
         Email: ${user.Email}
         Account Active: ${user.accountActive}
         Password: *******
        `
     )

    //Output the username and password
    // alert("Username: " + username + "\nPassword: " + password + "\nPassword Confirm:" + passwordConfirm);
}
    
    displayDetails();
    // alert("You have have to come to the end, Bye!");



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