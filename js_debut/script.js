// console.log(1 + 1);

// console.log(15 * NaN + 3);

// console.log(5 === "5");

// console.log(5 - "-5");

// var x = 5 + "-5";
// console.log(typeof x);



// 0. Data-Types = String/ Number/ Boolean
// 1. console.log(); / להציג בקונסול
// 2. operators. + - > < === / פעולות מתמטיות
// 3. convert functions.  Numbers() String() Boolean() / פונקציות להמרת נתונים
// 4. typeof "44" = string / מחזיר
// 5. NaN null undefined / סוגי ערכים שונים
// 6. camelCase / סגנון כתיבה
// 7. Variables: let variableName = value; / יוצר משתנה
// 8. if statement: if (Boolean){code-block}
// 9. else: default answer for if.
// 10. confirm() = returns true/false
// 11. prompt() = returns String / null
// 12. alert() = returns undefined
// 13. Concatenation. / חיבור ערכים
// 14. Number.isNaN() / is the value = NaN ? if it is = true.
// 15. NaN is not equal to NaN!
// 16. else if / Alternative to the first if.
// 17. && = AND. || = OR
// 18. num = num + 5 ==> num += 5; Shortcut
 
// 19. Exercise :
/*  let userName = "David";
 let mail = "David@gmail.com";


 let age = prompt("Age:");
 let gender = prompt("Gender m/f:");

 if (gender === "m") {
     alert("ברוך הבא " + userName);
 }else if (gender === "f") {
     alert("ברוכה הבאה " + userName);
 }else{
     alert("choose only m/f!");
 }


 let subscribeConfirmation = confirm("would you like to subscribe to our newsletter?");

 if (subscribeConfirmation) {
     alert("thank you your email" + mail + " was registered");
 }else{
     alert("Your loss!");
 }



let age = prompt("Age:");

 if (age !== null) {
     age = Number(age);
    
     if (age <= 0 ) {
         alert("Ha Ha, idiot.");
     }else if(age > 0 && age <=20) { 
         alert("Does you're mother knows you're here?")
     }else if(age > 20 && age < 120) {
         alert("Youll be fine.. I think...😈");
     }else if (age > 120){
         alert("RIP👼");
     }else{
     alert("Numbers only dummy👮‍♂️")
     }
 }else{
     alert("Nothing was typed.")
 }

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
// 20. ! before means the opposite. / !true = false
// 21. functions + return

    // let age = prompt("Age:");

// if (age !== null ) {
//     age = Number(age);

//     if (!Number.isNaN(age) && age > 0){
//        return age
//     }else{
//         alert("Positive numbers only.");
//     }
// }else{
//     alert("No type was made.");
//     return "The user canceled"
// }



let age = Number(prompt("Type age:"));

while (age <= 0) {
    alert("Ha ha, try again idiot")
    age = Number(prompt("Type age:"));
}



// Advanced functions
/* let ageOfUser = getAge()


 console.log(ageOfUser);


let userGuess = prompt("Guess a number between 1-5:");

function checkUserGuess(num) {
    if (num == 3) {
        alert("You won!");
    }else{
     alert("Game over!");
    }
}

checkUserGuess(userGuess)
*/

// 22. Template string => `This is string ${variable}`
// 23. \n\r new line
// 24. Add back-slash (\) before "". like this => \"
// 25. "_" in number wont show
// 26. objects ==> let variableName = {item1: value, item2: value};


// arrayName[arrayName.length - 1] ==> return last item 
// .push("This value will be added last in the array")
//pop() will remove the last array
// unshift("Add new item to the start")
// .shift() removes the first item
// .fill(value, start (including), end(not including))

