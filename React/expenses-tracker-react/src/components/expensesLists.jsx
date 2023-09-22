import ExpensesListsSelect from "./expensesListsSelect";

const ExpensesLists = ({ lists }) => {
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

            <ExpensesListsSelect lists={lists} dropdown={false} />
         </div>
      </div>
   );
};

export default ExpensesLists;
