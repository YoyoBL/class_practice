import classNames from "classnames";
import { useState } from "react";
import { useError } from "./hooks/useError";

const ExpenseForm = ({ onAdd = () => {} }) => {
   const [titleInput, setTitleInput] = useState("");
   const [costInput, setCostInput] = useState("");
   const [sourceInput, setSourceInput] = useState("");

   const { error, checkEmptyInputs, resetError, emptyFieldMessage } = useError(
      "titleInput",
      "costInput",
      "sourceInput"
   );

   const handleClick = () => {
      if (!titleInput || !costInput || !sourceInput) {
         checkEmptyInputs(titleInput, costInput, sourceInput);
         return;
      }

      const newExpense = {
         title: titleInput,
         cost: costInput,
         source: sourceInput,
      };

      onAdd(newExpense);
   };

   return (
      <>
         <th scope="row">
            <i className="bi bi-plus text-info fs-4"></i>
         </th>

         <td>
            <input
               value={titleInput}
               onChange={(e) => {
                  setTitleInput(e.target.value);
                  resetError("titleInput");
               }}
               type="text"
               className={classNames("form-control", {
                  "is-invalid": error?.titleInput,
               })}
               placeholder="שם"
            />
            {error?.titleInput && (
               <div className="invalid-feedback">{emptyFieldMessage}</div>
            )}
         </td>

         <td>
            <input
               value={costInput}
               onChange={(e) => {
                  setCostInput(e.target.value);
                  resetError("costInput");
               }}
               type="number"
               className={classNames("form-control", {
                  "is-invalid": error?.costInput,
               })}
               placeholder="מחיר"
            />
            {error?.costInput && (
               <div className="invalid-feedback">{emptyFieldMessage}</div>
            )}
         </td>

         <td>
            <div dir="ltr" className="input-group">
               <button
                  id="cards-dropdown"
                  type="button"
                  className="btn btn-outline-info dropdown-toggle dropdown-toggle-split"
               >
                  <span className="visually-hidden">Toggle Dropdown</span>
               </button>

               <ul className="dropdown-menu"></ul>
               <input
                  dir="rtl"
                  value={sourceInput}
                  onChange={(e) => {
                     setSourceInput(e.target.value);
                     resetError("sourceInput");
                  }}
                  type="text"
                  className={classNames("form-control", {
                     "is-invalid": error?.sourceInput,
                  })}
                  placeholder="מקור"
               />
               {error?.sourceInput && (
                  <div className="invalid-feedback">{emptyFieldMessage}</div>
               )}
            </div>
         </td>
         <td id="current-sheet-new-expense" className="text-center">
            כללי
         </td>
         <td>
            <div className="text-center">
               <button onClick={handleClick} className="btn btn-outline-info">
                  שמור
               </button>
               <button className="btn btn-outline-warning d-none">ערוך</button>
            </div>
         </td>
      </>
   );
};

export default ExpenseForm;
