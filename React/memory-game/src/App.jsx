import { useState } from "react";
import "./App.css";
import MemoryGame from "./components/memoryGame";
import Menu from "./components/menu";

function App() {
   const [menu, setMenu] = useState();
   return (
      <div className="App bg-secondary">
         <div
            className="container d-flex flex-column justify-content-center"
            style={{ height: "100vh" }}
         >
            {!menu && (
               <Menu onDifficulty={(numOfCards) => setMenu(numOfCards)} />
            )}
            {menu && <MemoryGame numOfCards={menu} />}
         </div>
      </div>
   );
}

export default App;
