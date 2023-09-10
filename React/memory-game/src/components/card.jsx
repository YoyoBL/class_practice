const Card = ({
   card: { id, title, isFlipped },
   backImage,
   onFlip = () => {},
}) => {
   return (
      <div className="col">
         <div onClick={() => onFlip(id)} className="position-relative">
            <img
               className="img-fluid rounded-4 "
               src="/images/Card_back.jpg"
               alt=""
            />
            <img
               className="img-fluid rounded-4 position-absolute top-0 start-0"
               src={`/images/${title}.jpg`}
               alt=""
               hidden={!isFlipped}
            />
         </div>
      </div>
   );
};

export default Card;
