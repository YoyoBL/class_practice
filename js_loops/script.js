

// for (let i = 0; i < 4 ; i++) {
//     let password = prompt('Enter password:');
//     if (password === '1234'){
//         alert("You are logged in");
//         i=4;
//     }else if(i===3){
//         alert("too many tries");
//     }
// }

// let userNum = prompt("Enter a number");

// for (let i = 2 ; i <= userNum; i+=2 ) {
//     console.log(i)
// }
















/* 1. ask the user for a password and keep asking until he enters 1234 or tried 4 times
    - on success show logged in
    - after 4 times show you shall not pass
2. receive from the user a number and show all even numbers until that number in console
3. show the following template "name (age) - balance" 
[
  {
    "balance": "$1,107.16",
    "age": 36,
    "name": "Cantu Mckenzie"
  },
  {
    "balance": "$1,608.24",
    "age": 25,
    "name": "Schultz Sears"
  },
  {
    "balance": "$1,266.22",
    "age": 37,
    "name": "Lana Key"
  },
  {
    "balance": "$1,728.23",
    "age": 24,
    "name": "Maggie Blanchard"
  },
  {
    "balance": "$1,412.79",
    "age": 33,
    "name": "Julianne Curry"
  }
]
4. log the following  object "key => value, key => value" in one string


{
    "_id": "63f3b7cadf9d3ea073e07d6f",
    "index": 0,
    "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
    "isActive": true,
    "balance": "$1,412.34",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Mcintosh Mills",
    "gender": "male",
    "company": "BOINK",
    "email": "mcintoshmills@boink.com",
    "phone": "+1 (874) 488-2691",
    "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
    "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
    "registered": "2015-10-09T02:34:25 -03:00",
    "latitude": -86.307639,
    "longitude": 31.864756,
    "tags": [
      "irure",
      "minim",
      "consequat",
      "ipsum",
      "Lorem",
      "labore",
      "non"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Teresa Horn"
      },
      {
        "id": 1,
        "name": "Tanner Nguyen"
      },
      {
        "id": 2,
        "name": "Shelby Gates"
      }
    ],
    "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  }
  */


// Iteration = Loop
// basic while loop > add in the code block i++;

// let i = 0;

// while (i < 10) {
//   console.log(`this is loop number ${i + 1}`)
//   i ++;
// }

// do while loop = do the loop snd the check.

//For

// for (let i = 0 ;i < 10; i++ ){
//   console.log(`this is loop number ${i}`);
// }

//For of = for Arrays. syntax = for (let value of array){} ;

// let names = [
//   "daniel",
//   "lora",
//   "hanna",
//   "avi",
//   "shoshana",
//   "kofiko",
//   "ruchama",
//   "ziva",
//   "Yoel",
//   "David"
// ];

// // console.log(names[0]);
// // console.log(names[1]);


// for (let value of array) {
//   console.log(value);
// }

// for (let i = 0; i < names.length ; i++){
//   console.log(names[i]);

// }

// console.log(names[0]);
// console.log(names[1])

//for in

// let user = {
//   name:{ firstName: "Daniel", lastName: "Whatever"},
//   email:{ gamil: "D@gmail.com", Walla: "W@walla.com"},
// };



// for (let key in user) {
//   // let value = user[key];

//   console.log(key, user[key]);
//   console.log("_______");
// }


function passwordCheck(){
  let password = prompt("Enter password:");
  let attempts = 1;
  
  while(password !== "1234" && attempts < 4 && password === null) {
    password = prompt("Try again:");
    attempts++
  }
  
  if(password === "1234"){
    alert("You are logged in.")
  }else{
    alert("Too many tries")
  }
}

function ConsoleEvenNumbers(){

let userNum = Number(prompt("Choose a number:"));

  for (let counter = 0; counter < userNum ; counter += 2) {
    console.log(counter)
  }
}


let bankAccounts = [
  {
    "balance": "$1,107.16",
    "age": 36,
    "name": "Cantu Mckenzie"
  },
  {
    "balance": "$1,608.24",
    "age": 25,
    "name": "Schultz Sears"
  },
  {
    "balance": "$1,266.22",
    "age": 37,
    "name": "Lana Key"
  },
  {
    "balance": "$1,728.23",
    "age": 24,
    "name": "Maggie Blanchard"
  },
  {
    "balance": "$1,412.79",
    "age": 33,
    "name": "Julianne Curry"
  }
]

// "(name) ((age))" - "(balance)"

function ex3(){
  for (let account of bankAccounts){
  
    console.log(`${account["name"]} (${account["age"]}) - ${account["balance"]}`)
  
  }

}

let object = {
  "_id": "63f3b7cadf9d3ea073e07d6f",
  "index": 0,
  "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
  "isActive": true,
  "balance": "$1,412.34",
  "picture": "http://placehold.it/32x32",
  "age": 28,
  "eyeColor": "brown",
  "name": "Mcintosh Mills",
  "gender": "male",
  "company": "BOINK",
  "email": "mcintoshmills@boink.com",
  "phone": "+1 (874) 488-2691",
  "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
  "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
  "registered": "2015-10-09T02:34:25 -03:00",
  "latitude": -86.307639,
  "longitude": 31.864756,
  "tags": [
    "irure",
    "minim",
    "consequat",
    "ipsum",
    "Lorem",
    "labore",
    "non"
  ],
  "friends": [
    {
      "id": 0,
      "name": "Teresa Horn"
    },
    {
      "id": 1,
      "name": "Tanner Nguyen"
    },
    {
      "id": 2,
      "name": "Shelby Gates"
    }
  ],
  "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
  "favoriteFruit": "strawberry"
}

for (let key in object) {
  console.log(`${key} => ${object[key]}`);
};

let lineCombo = "";


for (let key in object) {
  let line = (`${key} => ${object[key]}`);
  lineCombo += line + "\n\r"
};

console.log(lineCombo)










/*
1. ask the user for a password and keep asking until he enters 1234 or tried 4 times
    - on success show logged in
    - after 4 times show you shall not pass
2. receive from the user a number and show all even numbers until that number in console
3. show the following template "(name) (age)" - "(balance)" 
[
  {
    "balance": "$1,107.16",
    "age": 36,
    "name": "Cantu Mckenzie"
  },
  {
    "balance": "$1,608.24",
    "age": 25,
    "name": "Schultz Sears"
  },
  {
    "balance": "$1,266.22",
    "age": 37,
    "name": "Lana Key"
  },
  {
    "balance": "$1,728.23",
    "age": 24,
    "name": "Maggie Blanchard"
  },
  {
    "balance": "$1,412.79",
    "age": 33,
    "name": "Julianne Curry"
  }
]
4. log the following  object "key => value, key => value" in one string


{
    "_id": "63f3b7cadf9d3ea073e07d6f",
    "index": 0,
    "guid": "1741cd60-75c7-496e-b880-0e3e5adfd1d5",
    "isActive": true,
    "balance": "$1,412.34",
    "picture": "http://placehold.it/32x32",
    "age": 28,
    "eyeColor": "brown",
    "name": "Mcintosh Mills",
    "gender": "male",
    "company": "BOINK",
    "email": "mcintoshmills@boink.com",
    "phone": "+1 (874) 488-2691",
    "address": "480 Amity Street, Byrnedale, Tennessee, 8254",
    "about": "Cillum nisi officia qui dolore dolor non nisi. Irure velit proident nisi duis voluptate. Velit Lorem anim veniam aute id officia et enim consequat aliquip. Lorem proident officia Lorem sit anim laborum non esse irure occaecat.\r\n",
    "registered": "2015-10-09T02:34:25 -03:00",
    "latitude": -86.307639,
    "longitude": 31.864756,
    "tags": [
      "irure",
      "minim",
      "consequat",
      "ipsum",
      "Lorem",
      "labore",
      "non"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Teresa Horn"
      },
      {
        "id": 1,
        "name": "Tanner Nguyen"
      },
      {
        "id": 2,
        "name": "Shelby Gates"
      }
    ],
    "greeting": "Hello, Mcintosh Mills! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  }
*/

