function ProductCard({
   productName,
   category,
   material,
   weight,
   color,
   price,
}) {
   return (
      <div className="card" style={{ width: "18rem" }}>
         <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            className="card-img-top p-5"
            alt="product"
         />
         <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">{category}</li>
               <li className="list-group-item">{material}</li>
               <li className="list-group-item">{weight}</li>
               <li className="list-group-item">{color}</li>
            </ul>
         </div>
         <div className="card-footer">{price}</div>
      </div>
   );
}
export default ProductCard;
