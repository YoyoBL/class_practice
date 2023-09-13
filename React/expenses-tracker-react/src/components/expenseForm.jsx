const ExpenseForm = () => {
   return (
      <>
         <th scope="row">
            <i className="bi bi-plus text-info fs-4"></i>
         </th>

         <td>
            <input
               id="expanse-name"
               type="text"
               className="form-control"
               placeholder="שם"
               aria-label="שם"
               aria-describedby="basic-addon1"
               fdprocessedid="q9ojoo"
            />
         </td>

         <td>
            <input
               id="expanse-price"
               type="number"
               className="form-control"
               placeholder="מחיר"
               aria-label="מחיר"
               aria-describedby="basic-addon1"
               fdprocessedid="qc64ge"
            />
         </td>

         <td>
            <div dir="ltr" className="input-group">
               <button
                  id="cards-dropdown"
                  type="button"
                  className="btn btn-outline-info dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  fdprocessedid="4t1ri"
               >
                  <span className="visually-hidden">Toggle Dropdown</span>
               </button>

               <ul id="cards-list" className="dropdown-menu"></ul>
               <input
                  dir="rtl"
                  id="expanse-card"
                  type="text"
                  className="form-control"
                  placeholder="מקור"
                  aria-label="מקור"
                  fdprocessedid="vvxevw"
               />
            </div>
         </td>
         <td id="current-sheet-new-expense" className="text-center">
            כללי
         </td>
         <td>
            <div className="text-center">
               <button
                  id="add-new-expanse-btn"
                  className="btn btn-outline-info"
                  fdprocessedid="txei0f"
               >
                  שמור
               </button>
               <button
                  id="edit-expanse-btn"
                  className="btn btn-outline-warning d-none"
               >
                  ערוך
               </button>
            </div>
         </td>
      </>
   );
};

export default ExpenseForm;
