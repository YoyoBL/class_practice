function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const rockPaperScissorsOptions = ["paper", "rock", "scissors"];

/**
 * in 20% of the time it will reject
 * @returns Promise<"rock"|"scissors"|"paper">
 */
async function rockPaperScissors() {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const isError = Math.random() > 0.8;

         if (isError) {
            reject("could not draw");
            return;
         }

         resolve(getRandomInt(0, rockPaperScissorsOptions.length));
      }, 2000);
   });
}

function rockPaperScissorsWinnerCalculation(player1, player2) {
   if (player1 === player2) {
      return "Tie";
   }

   player1Index = rockPaperScissorsOptions.indexOf(player1);
   player2Index = rockPaperScissorsOptions.indexOf(player2);

   if (
      player1Index === rockPaperScissorsOptions.length - 1 &&
      player2Index === 0
   ) {
      return "Player1 wins";
   } else if (
      player2Index === rockPaperScissorsOptions.length - 1 &&
      player1Index === 0
   ) {
      return "Player1 wins";
   }

   if (player1Index > player2Index) {
      return "Player1 wins";
   } else {
      return "Player2 wins";
   }
}

async function play() {
   try {
      const player1 = await rockPaperScissors();
      console.log(rockPaperScissorsOptions[player1]);
      const player2 = await rockPaperScissors();
      console.log(rockPaperScissorsOptions[player2]);
      console.log(rockPaperScissorsWinnerCalculation(player1, player2));
   } catch (e) {
      console.log(e);
   }
}

play();

/**
 *
 * use the rockPaperScissors function to receive two players hands
 * show player1/player2 win or tie based on the results
 *
 * in case of an error show a message
 *
 * 1. do the above request using .then
 * 2. do the above request using await
 */
