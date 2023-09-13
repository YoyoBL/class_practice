import { useState } from "react";

const ExpensesLists = ({ lists }) => {
   const [select, setSelect] = useState(1);
   return (
      <div className="col-12 col-md-3">
         <div className="card">
            <div className="card-header">רשימת הוצאות</div>

            <div className="d-flex justify-content-evenly my-2 ">
               <button
                  type="button"
                  className="btn btn-outline-info"
                  data-bs-toggle="modal"
                  data-bs-target="#newListModal"
               >
                  <i className="bi bi-plus"></i>
               </button>

               <button
                  type="button"
                  className="btn btn-outline-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editListModal"
               >
                  <i className="bi bi-pencil-square"></i>
               </button>

               <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteListModal"
               >
                  <i className="bi bi-trash3"></i>
               </button>
            </div>

            <select
               value={select}
               onChange={(e) => setSelect(e.target.value)}
               className="form-select overflow-hidden"
               aria-label="multiple select"
               size="2"
            >
               {lists.map((list) => (
                  <option key={list.id} value={list.id}>
                     {list.title}
                  </option>
               ))}
            </select>
         </div>
      </div>
   );
};

export default ExpensesLists;
