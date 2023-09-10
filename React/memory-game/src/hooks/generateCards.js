import { v4 as uuid } from "uuid";

export function generateCards(numOfCards = 12) {
   const cards = [];
   for (let i = 0; i < numOfCards / 2; i++) {
      cards.push(
         {
            title: `card (${i + 1})`,
            isFlipped: false,
            isMatched: false,
            id: uuid(),
         },
         {
            title: `card (${i + 1})`,
            isFlipped: false,
            id: uuid(),
         }
      );
      function shuffleArray(array) {
         for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
         }
      }

      shuffleArray(cards);
   }
   return cards;
}
