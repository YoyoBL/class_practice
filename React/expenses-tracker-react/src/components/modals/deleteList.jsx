import { useState } from "react";
import ExpensesListsSelect from "../expensesListsSelect";

const DeleteList = ({ lists, onDelete = () => {} }) => {
   const [selectedValue, setSelectedValue] = useState("1");
   return (
      <div
         className="modal fade"
         id="deleteListModal"
         tabIndex="-1"
         aria-hidden="true"
      >
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-header d-block">
                  <h1
                     className="modal-title text-center fs-5"
                     id="deleteExpenseSheetModalLabel"
                  >
                     מחק רשימת הוצאות
                  </h1>
               </div>
               <div className="modal-body">
                  <div className="input-group mb-3">
                     <ExpensesListsSelect
                        lists={lists}
                        dropdown={true}
                        onSelectChange={(selected) =>
                           setSelectedValue(selected)
                        }
                     />
                     <span
                        className="input-group-text position-relative z-2 text-danger border-danger bg-white"
                        id="basic-addon2"
                     >
                        רשימה למחיקה
                     </span>
                  </div>
                  <div className="text-danger fw-lighter text-center fs-6">
                     .מחיקת רשימה תמחק גם את כל ההוצאות שהיא מכילה
                  </div>
               </div>
               <div className="modal-footer">
                  <button
                     onClick={() => onDelete(selectedValue)}
                     type="button "
                     className="btn btn-outline-danger px-5"
                     data-bs-dismiss="modal"
                  >
                     מחק
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

export default DeleteList;
