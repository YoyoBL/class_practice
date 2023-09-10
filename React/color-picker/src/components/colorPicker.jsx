import { useState } from "react";
const ColorPicker = ({ startingColor }) => {
   const [color, setColor] = useState(startingColor);
   return (
      <div className="container text-center">
         <button onClick={() => setColor("red")} className="btn btn-danger m-2">
            Red
         </button>
         <button
            onClick={() => setColor("green")}
            className="btn btn-success m-2"
         >
            Green
         </button>
         <button
            onClick={() => setColor("blue")}
            className="btn btn-primary m-2"
         >
            Blue
         </button>
         <div style={{ backgroundColor: color, height: "200px" }}></div>
      </div>
   );
};

export default ColorPicker;
