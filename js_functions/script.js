// function getUserAge () {
//     age = Number(prompt("Type your age:"));
//     if(age >= 0 ){
//         return age;
//     }
//     alert("Try again") 
// }

// function getUserName(){
//     fullName = prompt("Full name:");
//     if (Boolean(Number(fullName)) === false) {
//         return "Hello " + fullName;
//     }
//     return "Your name must have at least one letter";
// }

// alert(getUserName());

// let firstNumInput = Number(prompt("הזן את המספר הראשון", "לדוג: 3,78,190...")) ;
// let secondNumInput = Number(prompt("הזן את המספר השני", "לדוג: 3,78,190...")) ;
// let actionForCalculatorInput = prompt("הזן את הפעולה שברצונך לבצע על שני המספרים שהזנת: 'חיבור' 'חיסור' 'כפל' או 'חילוק' בלבד" , "'חיבור' 'חיסור' 'כפל' או 'חילוק'");

//     function calculate(num1, num2, action){
//     let result;
//     if(action === "חיבור"){
//        result = (num1 + num2) ;
//         return result
//     } else if(action === "חיסור" ){
//         result = (num1 - num2); 
//         return result;
//      } else if(action === "כפל" ){
//         result = (num1 * num2); 
//         return result;
//      } else if(action === "חילוק" ){
//         result = (num1 / num2);
//         return result;
//      } else{
//         result = 'none'
//         return result;
//      }


// }

// alert(calculate(firstNumInput, secondNumInput, actionForCalculatorInput));


// let wheel = 4;
// wheel = wheel + 2;
// wheel += 2


// let car = {
//     key: "value",
//     engine: "95",
//     engineFuel: "95",
//     wheel,
//     ["number of seats"]: 7,
//     getAge(){ 
//         alert("hello")
//     },

// }

// car["number of seats"]

// // console.log(car.getAge)




// arrayName[arrayName.length - 1] ==> return last item 
// .push("This value will be added last in the array")
//pop() will remove the last array
// unshift("Add new item to the start")
// .shift() removes the first item
// .fill(value, start (including), end(not including))

// let listItems = [
//     "item1",
//     "item2", 
//    "item3",
//    "item4",
//    "item5",
//    "item6"
// ];

// listItems.fill("updated", 2, listItems.length -1 )

// console.log(listItems)


// 1. create new project
// 2. create add button which will ask the user for name and age and add to an array as object
// 3. create show button which will log the array to console
// 4. create a button which will remove the last user added
// 5. create a button which will remove all users
// 6. button that ask the user to choose what index to see


// let usersList = [];


// function getUserAgeAndName() {
   
   
// //Inserted object to the posh array

//     usersList.push({
//         name: prompt("Name:"),
//         age: Number(prompt("Age:"))
//     })
// };

// function showLog() {
//     console.log(usersList)
// }

// function removerLastUser() {
//     usersList.pop();
// }

// function reset() {
//     usersList = []
// }

// function ageSum() {
//     counter = 0;
//     usersList[counter].age + usersList[counter + 1].age
// }



// /* 1. button that ask the user to add an item + item price. and store as an object in array
// 2. button to show in the console the array
// 3. button check out. 
// */


function insertPokemon(){
let pokedex = [];


let pokeName = prompt("Pokemon name:");
let pokeType = (`What type is ${pokeName}?`);

pokedex.push({
    pokeName,
    pokeType
})
}