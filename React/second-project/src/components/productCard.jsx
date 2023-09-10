import ProductInfo from "./productInfo";

function ProductCard({ title, category, price, Discount, color }) {
   return (
      <div className="card">
         <img
            src="https://www.citypng.com/public/uploads/preview/download-hd-shopping-cart-black-logo-icon-png-11640441685ymd041qjws.png"
            alt="product"
         />
         <ProductInfo title category price Discount color />
      </div>
   );
}

export default ProductCard;
