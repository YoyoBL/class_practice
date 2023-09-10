function ProductInfo({ title, category, price, Discount, color }) {
   return (
      <div className="productInfo">
         <span>Title: {title}</span>
         <span>Category: {category}</span>
         <span>Price: {price}</span>
         <span>Discount: {Discount}</span>
         <span>Color: {color}</span>
      </div>
   );
}

export default ProductInfo;
