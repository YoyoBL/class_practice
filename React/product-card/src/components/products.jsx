import ProductCard from "./product-card";

function Products({ productsArray }) {
   return (
      <>
         {productsArray.map(
            ({ productName, category, material, weight, color, price }) => (
               <div className="col">
                  <ProductCard
                     productName={productName}
                     category={category}
                     material={material}
                     weight={weight}
                     color={color}
                     price={price}
                  />
               </div>
            )
         )}
      </>
   );
}
export default Products;
