/**
 *
 * TODO:
 *  V sync input value with state
 *  V on add clicked raise event
 *  V pass input to todos as part of add clicked
 *  V clear input after sending to todos
 *  4.2 show error when relevant
 *  4.3 disable add when error
 *  5. on Enter key clicked submit form
 */

import { useState } from "react";

const TodoForm = ({ onSubmit = () => {} }) => {
   const [input, setInput] = useState("");
   const [error, setError] = useState("");

   const handleOnSubmit = () => {
      if (input.length < 2) {
         setError("Too short, 2 characters minimum.");
         return;
      }
      onSubmit(input);
      setInput("");
   };

   return (
      <div className="form">
         <div className="input-group mb-3">
            <div className="input-group-prepend">
               <span className="input-group-text">I need to:</span>
            </div>
            <input
               onChange={(e) => {
                  setInput(e.target.value);
                  setError("");
               }}
               value={input}
               type="text"
               className={`form-control ${error ? "is-invalid" : ""}`}
               placeholder="Buy milk..."
            />
            <button
               onClick={handleOnSubmit}
               className="btn btn-primary rounded-end"
            >
               Add
            </button>
            <div className="invalid-feedback">{error}</div>
         </div>
      </div>
   );
};

export default TodoForm;
