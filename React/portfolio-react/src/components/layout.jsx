import About from "./about";
import Home from "./home";
import Projects from "./projects";

import { Outlet } from "react-router-dom";

const Layout = ({ projectsList }) => {
   return (
      <>
         <Home />
         <About />
         <Projects projectsList={projectsList} />
      </>
   );
};

export default Layout;
