import { useState, useEffect } from "react";
import { generateCards } from "../functions/generateCards";

export const useCards = (numOfCards) => {
   const [cards, setCards] = useState(generateCards(numOfCards));

   //__________________________________

   const tempFlipped = cards.filter(
      (card) => card.isFlipped && !card.isMatched
   );
   let blockFlip = false;

   //__________________________________

   useEffect(() => {
      console.log(cards.map((card) => card.title));
   }, []);

   useEffect(() => {
      if (tempFlipped.length === 2) {
         checkCardsMatch();
      }
   }, [cards]);

   //__________________________________

   const handleCardFlip = (id) => {
      if (!blockFlip) {
         setCards((cards) =>
            cards.map((card) => {
               if (card.id === id) {
                  return { ...card, isFlipped: true };
               }
               return { ...card };
            })
         );
      }
   };

   const checkCardsMatch = () => {
      if (tempFlipped[0].title !== tempFlipped[1].title) {
         blockFlip = true;
         setTimeout(() => {
            setCards((cards) =>
               cards.map((card) =>
                  card.isFlipped && !card.isMatched
                     ? { ...card, isFlipped: false }
                     : { ...card }
               )
            );
            blockFlip = false;
         }, 1000);
         return;
      }

      setCards((cards) => {
         const updatedCards = cards.map((card) =>
            card.isFlipped ? { ...card, isMatched: true } : { ...card }
         );
         if (updatedCards.some((card) => card.isMatched === false)) {
            return updatedCards;
         }
         alert("Game Won!");
         window.location.reload();
         return updatedCards;
      });
   };

   return {
      cards,
      handleCardFlip,
   };
};
