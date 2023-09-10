import { useState } from "react";

function Input() {
   const [input, setInput] = useState("");
   return (
      <div>
         <input onChange={(e) => setInput(e.target.value)} type="text" />
         <div>{input}</div>
      </div>
   );
}

export default Input;
