import "./App.css";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import About from "./components/about";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/signUp";
import SignIn from "./components/signIn";

function App() {
   return (
      <div className="App d-flex flex-column min-vh-100">
         <header>
            <NavBar />
         </header>
         <main className="flex-fill container">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/sign-up" element={<SignUp />} />
            </Routes>
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
}

export default App;
