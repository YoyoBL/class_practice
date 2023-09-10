import "./App.css";
import Scores from "./components/scores";
import Todo from "./components/todo";

function App() {
   return (
      <div className="App">
         <div className="container mt-3">
            {/* <Todo /> */}
            <Scores />
         </div>
      </div>
   );
}

export default App;
