import { useState } from "react";

const ExpensesListsSelect = ({
   lists,
   dropdown = true,
   onSelectChange = () => {},
}) => {
   const [select, setSelect] = useState(1);

   const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      setSelect(selectedValue);
      onSelectChange(selectedValue);
   };

   return (
      <select
         value={select}
         onChange={handleSelectChange}
         className="form-select overflow-hidden"
         aria-label="multiple select"
         size={dropdown ? 0 : lists.length === 1 ? "2" : lists.length}
      >
         {lists.map((list) => (
            <option key={list.id} value={list.id}>
               {list.title}
            </option>
         ))}
      </select>
   );
};

export default ExpensesListsSelect;
