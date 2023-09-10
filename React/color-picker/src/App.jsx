import "./App.css";
import ColorPicker from "./components/colorPicker";

function App() {
   return (
      <div className="App">
         <ColorPicker startingColor="purple" />
         <ColorPicker startingColor="aliceBlue" />
         <ColorPicker startingColor="orange" />
      </div>
   );
}

export default App;
