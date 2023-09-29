import "../styles/technologies.css";

const Technologies = ({
   carousel = true,
   logos = [
      "html-5",
      "css-3",
      "sass",
      "bootstrap",
      "javascript",
      "typescript",
      "vscode",
      "github",
   ],
}) => {
   const generateLogos = (key) => {
      return (
         <div
            key={key}
            className={["logos-slide", carousel && "slide"].join(" ")}
         >
            {logos.map((logo, index) => (
               <img
                  key={index}
                  src={`/images/Icons/${logo}-svgrepo-com.svg`}
                  alt="Html logo"
               />
            ))}
         </div>
      );
   };
   return (
      <div className="row mt-3">
         <div className="text-center text-white">
            <h3>Technologies</h3>
         </div>
         <div className="logos">
            {generateLogos(0)}
            {carousel && [generateLogos(1), generateLogos(2)]}
         </div>
      </div>
   );
};

export default Technologies;
