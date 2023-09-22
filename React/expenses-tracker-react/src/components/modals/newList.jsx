import { useState } from "react";

const NewList = ({ onNewList = () => {} }) => {
   const [newListInput, setNewListInput] = useState("");

   return (
      <div
         className="modal fade"
         id="newListModal"
         tabIndex="-1"
         aria-hidden="true"
      >
         <div className="modal-dialog">
            <div className="modal-content">
               {" "}
               <div className="modal-header d-block">
                  <h1
                     className="modal-title text-center fs-5"
                     id="newExpenseSheetModalLabel"
                  >
                     רשימת הוצאות חדשה
                  </h1>
               </div>
               <div className="modal-body">
                  <div className="input-group mb-3">
                     <input
                        value={newListInput}
                        onChange={(e) => setNewListInput(e.target.value)}
                        dir="rtl"
                        id="new-expenses-sheet-name-input"
                        type="text"
                        className="form-control"
                        aria-describedby="basic-addon2"
                     />
                     <span
                        className="input-group-text position-relative z-2 text-info border-info bg-white"
                        id="basic-addon2"
                     >
                        :שם רשימת ההוצאות
                     </span>
                  </div>
               </div>
               <div className="modal-footer">
                  <button
                     onClick={() => {
                        onNewList(newListInput);
                        setNewListInput("");
                     }}
                     id="save-new-expenses-sheet-btn"
                     type="button "
                     className="btn btn-outline-info px-5"
                     data-bs-dismiss="modal"
                  >
                     שמור
                  </button>

                  <button
                     type="button"
                     className="btn btn-outline-secondary"
                     data-bs-dismiss="modal"
                  >
                     סגור
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewList;
