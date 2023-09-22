import EditDropdownBtn from "./editDropdownBtn";
import ExpenseForm from "./expenseForm";

const ExpensesTable = ({ onFormAdd = () => {} }) => {
   return (
      <div className="col-12 col-md-9">
         <table className="table table-striped text-center">
            {/* <colgroup>
               <col style={{ width: "fit-content" }} />
               <col style={{ width: "fit-content" }} />
               <col style={{ width: "fit-content" }} />
               <col style={{ width: "fit-content" }} />
               <col style={{ width: "fit-content" }} />
               <col style={{ width: "fit-content" }} />
            </colgroup> */}
            <thead>
               <tr>
                  <th>#</th>
                  <th>כותר</th>
                  <th>עלות</th>
                  <th>חשבון/כרטיס</th>
                  <th>רשימה</th>
                  <th>
                     <EditDropdownBtn />
                  </th>
               </tr>
            </thead>
            <tbody>
               <tr className="border border-info table-info">
                  <ExpenseForm onAdd={onFormAdd} />
               </tr>
               <tr>
                  <th>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>
                     <EditDropdownBtn />
                  </td>
               </tr>
            </tbody>
            <tfoot className="table-info">
               <tr>
                  <th></th>
                  <td>סה"כ</td>
                  <td>7921 ₪</td>

                  <td className="text-center">
                     <div className="dropdown">
                        <button
                           id="cards-filter"
                           className="btn dropdown-toggle"
                           type="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false"
                        >
                           כל הכרטיסים
                        </button>
                        <ul
                           id="cards-filter"
                           className="dropdown-menu text-end"
                        >
                           <li className="card-filter dropdown-item">
                              כל הכרטיסים
                           </li>
                        </ul>
                     </div>
                  </td>
                  <td id="current-sheet-table-footer" className="text-center">
                     כללי
                  </td>
                  <td></td>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};

export default ExpensesTable;
