import "./App.css";
import About from "./components/about";
import Home from "./components/home";
import NavBar from "./components/navBar";

function App() {
   return (
      <div className="App">
         <header>
            <NavBar />
         </header>

         <main>
            <div className="container">
               <section>
                  <Home />
               </section>

               <About />
            </div>
         </main>
         <footer>Footer</footer>
      </div>
   );
}

export default App;
