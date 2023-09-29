import { Link } from "react-router-dom";
import "../styles/general.css";
import Technologies from "./technologies";

const ProjectPage = ({ content }) => {
   return (
      <section className=" center-all min-vh-100 text-white">
         <div className="container">
            <h1 className="text-center">{content}</h1>
            <div className="row">
               <Technologies
                  carousel={false}
                  Technologies={["html-5", "css-3", "sass", "bootstrap"]}
               />
            </div>
         </div>
      </section>
   );
};

export default ProjectPage;
