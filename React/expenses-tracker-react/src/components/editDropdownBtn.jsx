import "../styles/editDropdownBtn.css";

const EditDropdownBtn = () => {
   return (
      <div>
         <button
            className="btn btn-outline-info dropdown-toggle py-0"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
         ></button>
         <ul className="dropdown-menu">
            <li id="edit-expanse-btn">
               <div className="edit-expense dropdown-item">ערוך</div>
            </li>
            <li>
               <div className="delete-expense dropdown-item text-danger">
                  מחק
               </div>
            </li>
         </ul>
      </div>
   );
};

export default EditDropdownBtn;
