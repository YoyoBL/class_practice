/*
1. Defer ==> run the js code after data is set
2. DOM ==> Document Object Model
3. document.getElementById("id-name")
4. $variable ==> var that contains a HTML element
5. .innerHTML ==> Allows to change content of element
6. $someVar.querySelector("CSS Selector")s ==> gets only 1 Element
7. $someVar.querySelectorAll("CSS Selector") ==> gets all Elements and insert them inside an Array-like(NodeList)
8. $someVar.addEventListener("click", function(){})
9. $someVar.style.border/backGroundColor... ==> change element style 
10.$someVar.classList ==> gets element classes inside array-like
11. $someVar.classList.add/remove/toggle("class name") ==> adds or removes classes
12. $someInput.value ==> gets the value inserted by the user



 */

let $input = document.getElementById("input");
let $body = document.querySelector("body");
let $paragraph = document.getElementById("Paragraph");
let $btn = document.getElementById("btn");
let $h1 = document.getElementById("h1");

function red() {
   $h1.innerHTML = $input.value;
   $h1.style.backgroundColor = "orange";
}

$btn.addEventListener("click", red);

/*
exercise:
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
// 	"Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]

// 🤚🏾

// BONUS
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling -->
*/
