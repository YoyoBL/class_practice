import { useState, useEffect } from "react";
import { generateCards } from "./generateCards";

export const useCards = (numOfCards) => {
   const [cards, setCards] = useState(generateCards(numOfCards));

   const [titles, setTitles] = useState(cards.map((card) => card.title));

   const tempFlipped = cards.filter(
      (card) => card.isFlipped && !card.isMatched
   );
   let blockFlip = false;

   //useEffect
   useEffect(() => {
      if (tempFlipped.length === 2) {
         checkCardsMatch();
      }
   }, [cards]);

   const handleCardFlip = (id) => {
      if (!blockFlip) {
         setCards((cards) =>
            cards.map((card) => {
               if (card.id === id) {
                  const updatedCard = { ...card, isFlipped: true };
                  tempFlipped.push(updatedCard);
                  return updatedCard;
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
