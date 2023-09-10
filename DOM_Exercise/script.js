// <!-- 1. create a new project
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
// 	"Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]

// 🤚🏾

// BONUS
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling -->

let $floorsInput = document.getElementById("floors");
let $executeBtn = document.getElementById("execute");
let $showFloors = document.getElementById("showFloors");
let $pyramidArea = document.getElementById("pyramidArea");

let pyramidBlocks = "";

function createPyramid() {
   $pyramidArea.innerHTML = "";

   $showFloors.innerHTML = `Youv'e chosen ${$floorsInput.value} floors.`;
   pyramidBlocks = "";

   for (let i = 0; i < $floorsInput.value; i++) {
      pyramidBlocks += `<div class="pyramidBlocks"></div>`;
      $pyramidArea.innerHTML += `<div class="row">
         ${pyramidBlocks}
       </div>`;
   }

   // for (let i = 0; ; ) {}
}

$executeBtn.addEventListener("click", createPyramid);
