import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from "./components/products";
import { productsArray } from "./_productsArray";
function App() {
   return (
      <div className="App">
         {console.log(productsArray)}
         <div className="container">
            <div className="row g-3">
               <Products productsArray={productsArray} />
            </div>
         </div>
      </div>
   );
}

export default App;
