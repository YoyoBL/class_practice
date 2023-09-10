let fullName = "יואל";
let mail = "yoel@gmail.com";
let age = Number(prompt("Age:"));
let gender = prompt("gender m/f: ");

if (gender === "m") {
   alert("ברוך הבא " + fullName);
}

if (gender === "f") {
   alert("ברוכה הבאה " + fullName);
}

if (gender !== "m") {
   if (gender !== "f") {
      alert("Wrong answer, please type m/f:");
   }
}

let nl = confirm("would you like to subscribe to our newsletter?");
if (nl === true) {
   alert("Thank you your email " + mail + " was registered");
} else {
   alert("Your lost");
}

if (age === 69) {
   alert("Your'e a lover😍");
}

if (age <= 0) {
   age = Number(prompt("HAHA Try again idiot"));
}

if (age > 0) {
   if (age <= 20) {
      alert("Does you're mother knows you're here?");
      sixty = confirm(
         "Would you like to know what would of happen if you typed 60?"
      );
      if (sixty === true) {
         age = 45;
      } else {
         alert("you're loss");
      }
   }
}

if (age > 20) {
   if (age <= 60) {
      alert("You're in the best time of your life!");
      sixty = confirm(
         "Would you like to know what would of happen if you typed 90?"
      );
      if (sixty === true) {
         age = 90;
      } else {
         alert("you're loss");
      }
   }
}

if (age > 60) {
   if (age < 120) {
      if (age !== 69) {
         alert("Can you feel the end.....?😈");
      }
   }
}

if (age >= 120) {
   alert("Send my regards to the almighty!😇");
}

if (Number.isNaN(age)) {
   alert("Numbers only!");
}

// 1. create a new project
// 2. receive from the user the following data:
//     - name
//     - email
//     - age
//     - gender

// 3. if male show ברוך הבא, השם שלו if female ברוכה הבאה, השם שלה
//         if didn't fill male and female properly show alert

// 4. show alert with the following question "would you like to subscribe to our newsletter?"
//         - yes - show the user "thank you your email HIS EMAIL was registered"
//         - no - "your lost"

// 5.
//     < 0 - 'haha'
//         fill at least 4 different age ranges
// 120 - 👼🏾 hope you are in haven
