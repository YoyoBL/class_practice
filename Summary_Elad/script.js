const $cells = document.querySelectorAll(".cell");
let symbol = "O";

let xPlayed = [];
let oPlayed = [];

const winOptions = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 4, 8],
   [2, 4, 6],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
];

function play(num) {
   if (!$cells[num].innerHTML) {
      $cells[num].innerHTML = switchSymbol();
      symbol === "X" ? xPlayed.push(num) : oPlayed.push(num);
      symbol === "X" ? checkWin(xPlayed) : checkWin(oPlayed);
   }
}

function switchSymbol() {
   symbol === "X" ? (symbol = "O") : (symbol = "X");
   console.log(xPlayed);

   return symbol;
}

function checkWin(x) {
   //    debugger;
   for (let i of winOptions) {
      let winCounter = 0;
      for (let k of i) {
         if (x.includes(k)) {
            winCounter++;
            if (winCounter === 3) {
               declareWinner();
            }
         }
      }
   }
}

function declareWinner() {
   alert(`${symbol} Won!`);

   for (let i in $cells) {
      $cells[i].innerHTML = "";
   }
   symbol = "O";
   xPlayed = [];
   oPlayed = [];
}

console.log(winOptions);
