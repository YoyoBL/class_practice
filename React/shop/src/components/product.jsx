import Counter from "./counter";

const Product = ({
   product: {
      id,
      title,
      description,
      price,
      discount,
      image: { url, alt },
      available,
      quantity,
   },
   onProductIncrement = () => {},
   onProductDecrement = () => {},
}) => {
   return (
      <div className="col">
         <div className="card" style={{ width: "18rem" }}>
            <img
               src="https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
               className="card-img-top"
               alt={alt}
            />
            <div className="card-body">
               <h5 className="card-title">{title}</h5>
               <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">Price: {price}$</li>
               <li className="list-group-item">
                  Discount:{" "}
                  {discount ? discount + "%" : "No Discount available"}
               </li>
               {discount && (
                  <li className="list-group-item">
                     After Discount: {(price / 100) * (100 - discount)}$
                  </li>
               )}
            </ul>
            <div className="card-body mx-auto">
               <Counter
                  value={quantity}
                  max={available === quantity}
                  onIncrement={onProductIncrement}
                  onDecrement={onProductDecrement}
               />
            </div>
         </div>
      </div>
   );
};

export default Product;
