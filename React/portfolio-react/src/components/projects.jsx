import Project from "./project";

const Projects = ({ projectsList = {} }) => {
   return (
      <section
         id="projects"
         style={{ minHeight: "100vh", backgroundColor: "#1e3c52" }}
      >
         <div className="container">
            <div className="row p-3">
               <h1 className="text-center text-white mt-3">Projects</h1>
               <div className="row g-5 mx-auto">
                  {projectsList.map((project) => (
                     <Project key={project.link} project={project} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default Projects;
