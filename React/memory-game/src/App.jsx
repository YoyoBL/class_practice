import "./App.css";
import MemoryGame from "./components/memoryGame";

function App() {
   return (
      <div className="App bg-secondary">
         <div
            className="container d-flex flex-column justify-content-center"
            style={{ height: "100vh" }}
         >
            <MemoryGame />
         </div>
      </div>
   );
}

export default App;
