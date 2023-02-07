let name = prompt("שם:");
let mail = prompt("מייל: ");
let gender = prompt("מין ז/נ:  ");

if (gender === "ז") {
   alert("ברוך הבא " + name);
}

if (gender === "נ") {
   alert("ברוכה הבאה " + name);
}

if (gender !== "נ") {
   if (gender !== "ז") {
      gender = alert("בחירה שגויה, אנא בחר ז/נ: ");
   }
}

let newsLetter = prompt("would you like to subscribe to our newsletter? y/n");

if (newsLetter === "y") {
   alert("Thank you, your email" + mail + " was registered");
}

if (newsLetter === "n") {
   alert("Your'e loss...");
}

if (newsLetter !== "y") {
   if (newsLetter !== "n") {
      newsLetter = alert("בחירה שגויה");
   }
}

let age = prompt("Please type you're age:");

if (age <= 0) {
   age = prompt("Very funny, try again idiot😒: ");
}

if (age <= 20) {
   alert("Does your'e mother know your'e here?👶...");
   age = 0;
}

if (age <= 50) {
   alert("You are in the best period of your'e life!😎");
   age = 0;
}

if (age >= 120) {
   alert("Send my regards to the Almighty🙌");
}

/*
1. create a new project
2. receive from the user the following data: 
    - name
    - email
    - age
    - gender

3. if male show ברוך הבא, השם שלו if female ברוכה הבאה, השם שלה
        if didn't fill male and female properly show alert

4. show alert with the following question "would you like to subscribe to our newsletter?"
        - yes - show the user "thank you your email HIS EMAIL was registered"
        - no - "your lost"

5. 
    < 0 - 'haha'
        fill at least 4 different age ranges
120 - 👼🏾 hope you are in haven
*/
