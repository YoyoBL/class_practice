import Card from "./card";
import { useCards } from "../hooks/useCards";

const MemoryGame = ({ numOfCards = 12 }) => {
   const { cards, handleCardFlip } = useCards(numOfCards);
   return (
      <div className="row row-cols-4 g-4 ">
         {cards.map((card) => (
            <Card
               key={card.id}
               card={card}
               onFlip={(id) => {
                  handleCardFlip(id);
               }}
            />
         ))}
      </div>
   );
};

export default MemoryGame;
