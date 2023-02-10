function getUserAge () {
    age = Number(prompt("Type your age:"));
    if(age >= 0 ){
        return age;
    }
    alert("Try again") 
}

function getUserName(){
    fullName = prompt("Full name:");
    if (Boolean(Number(fullName)) === false) {
        return fullName;
    }
    return "Your name must have at least one letter";
}

