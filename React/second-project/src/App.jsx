import "./App.css";
import ProductCard from "./components/productCard";
function App() {
   return (
      <div className="App">
         <ProductCard
            title="Ballon"
            category="Toys"
            color="Red"
            Discount="0"
            price="20$"
         />
         <div className="text-danger">Hello</div>
      </div>
   );
}

export default App;
