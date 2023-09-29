import "./App.css";
import Layout from "./components/layout";
import NavBar from "./components/navBar";
import ProjectPage from "./components/projectPage";
import { Routes, Route } from "react-router-dom";

const projectsList = [
   {
      title: "Expenses-Tracker",
      link: "https://yoyobl.github.io/Expenses_Tracker",
      gitHubLink: "Expenses_Tracker",
      description: (
         <>
            Keep better track of your expenses with this handy tool. <br />
            It lets you create as many different expense lists as you need,
            making it simple to manage and organize your financial records.
            <br />
         </>
      ),
   },
   {
      title: "Trivia",
      link: "https://yoyobl.github.io/Trivia",
      gitHubLink: "Trivia",
      description: (
         <>
            Exciting webpage trivia game with multiple categories. <br />
            Test your knowledge, earn points, and have fun while learning new
            facts!
         </>
      ),
   },
   {
      title: "Todo-Lists",
      link: "https://yoyobl.github.io/To_do_list",
      gitHubLink: "To_do_list",
      description: (
         <>
            Never forget a task again with this intuitive to-do app! <br />
            Easily create and track everything you need to do. <br />
            Plus, you can even organize your tasks into multiple lists for
            better organization and efficiency. <br />
         </>
      ),
   },
   {
      title: "Cards Memory Game",
      link: "https://yoyobl.github.io/Memory_Game_Cards",
      gitHubLink: "Memory_Game_Cards",
      description: (
         <>
            Have fun with this enjoyable memory card game! <br />
            If you're looking for more of a challenge, <br />
            you can increase the difficulty level and test your skills! <br />
         </>
      ),
   },
   {
      title: "Snake Game",
      link: "https://yoyobl.github.io/Snake",
      gitHubLink: "Snake",
      description: (
         <>
            Experience a wave of nostalgia with this classic Snake game that
            takes you on a trip down memory lane. <br />
            Some things never lose their charm! <br />
            Designed to enhance your vintage gaming experience, it's a timeless
            delight. <br />
         </>
      ),
   },
   {
      title: "Full-Stack Course Summary",
      link: "https://yoyobl.github.io/summary_bootstrap",
      gitHubLink: "summary_bootstrap",
      description: (
         <>
            Access a comprehensive summary of the full stack course, <br />
            personally written by me. <br />
            It provides all the necessary information to refresh your memory and
            covers every essential aspect in a concise format <br />
         </>
      ),
   },
];

function App() {
   return (
      <div className="App">
         <header>
            <NavBar />
         </header>

         <main>
            <Routes>
               <Route
                  path="/"
                  element={<Layout projectsList={projectsList} />}
               />
               {projectsList.map((project, index) => (
                  <Route
                     key={index}
                     path={project.title}
                     element={<ProjectPage content={project.title} />}
                  />
               ))}
            </Routes>
         </main>
         <footer>Footer</footer>
      </div>
   );
}

export default App;
