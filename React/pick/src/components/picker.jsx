import { useState } from "react";

const colorVariations = ["orange", "green", "blue", "yellow", "purple"];
let index = 0;

const Picker = () => {
   const [color, setColor] = useState("blue");
   const [text, setText] = useState("");
   return (
      <div className="container">
         <div className="row ">
            <div className="col-auto ">
               <button
                  onClick={() => {
                     setColor("white");
                     setText("Hello World!");
                  }}
                  className="btn btn-secondary"
               >
                  Text
               </button>
            </div>
            <div className="col-auto ">
               <button
                  onClick={() => {
                     setColor(colorVariations[index++]);
                     setText("");
                     if (index === colorVariations.length - 1) {
                        index = 0;
                     }
                  }}
                  className="btn btn-secondary"
               >
                  Color
               </button>
            </div>
         </div>
         <div className="row">
            <div className="col">
               <div style={{ backgroundColor: color, height: "100px" }}>
                  {text}
               </div>
            </div>
         </div>
      </div>
   );
};
export default Picker;
