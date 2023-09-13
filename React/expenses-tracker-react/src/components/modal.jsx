const ModalWindow = () => {
   return (
      <>
         <div
            className="modal fade"
            id="newListModal"
            tabIndex="-1"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
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

         <div
            className="modal fade"
            id="editListModal"
            tabIndex="-1"
            aria-hidden="true"
         >
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header d-block">
                     <h1
                        className="modal-title text-center fs-5"
                        id="renameExpenseSheetModalLabel"
                     >
                        ערוך שם
                     </h1>
                  </div>
                  <div className="modal-body">
                     <div className="input-group mb-3">
                        <select
                           dir="rtl"
                           className="select-expenses-sheet form-select"
                        >
                           undefined
                           <option value="1">כללי </option>
                           <option value="2">הו"ק חשבון עסקי </option>
                        </select>
                        <span
                           className="input-group-text position-relative z-2 text-warning border-warning bg-white"
                           id="basic-addon2"
                        >
                           רשימה לשינוי
                        </span>
                     </div>

                     <div className="input-group mb-3">
                        <input
                           dir="rtl"
                           id="rename-sheet-input"
                           type="text"
                           className="form-control"
                           placeholder="כללי"
                           aria-label="כללי"
                           aria-describedby="basic-addon2"
                        />
                        <span
                           className="input-group-text position-relative z-2 text-warning border-warning bg-white"
                           id="basic-addon2"
                        >
                           שם חדש
                        </span>
                     </div>
                  </div>
                  <div className="modal-footer">
                     <button
                        id="rename-expense-sheet-btn"
                        type="button "
                        className="btn btn-outline-warning px-5"
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
      </>
   );
};

export default ModalWindow;
