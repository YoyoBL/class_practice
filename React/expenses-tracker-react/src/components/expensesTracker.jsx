import { useState } from "react";
import ExpensesTable from "./ExpensesTable";
import ExpensesHeader from "./expensesHeader";
import ExpensesLists from "./expensesLists";
import { useLists } from "./hooks/useLists";
import Modals from "./modals/Modals";

const ExpensesTracker = () => {
   const { lists, newList, deleteList } = useLists();
   return (
      <>
         <Modals
            lists={lists}
            onNewListItem={(title) => newList(title)}
            onListDelete={deleteList}
         />

         <div className="container">
            <ExpensesHeader />
            <hr />

            <div dir="rtl" className="row mt-3">
               <ExpensesLists lists={lists} />

               <ExpensesTable onFormAdd={null} />
            </div>
         </div>
      </>
   );
};

export default ExpensesTracker;
