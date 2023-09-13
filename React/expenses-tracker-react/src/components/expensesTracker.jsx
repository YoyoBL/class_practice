import { useState } from "react";
import ExpensesTable from "./ExpensesTable";
import ExpensesHeader from "./expensesHeader";
import ExpensesLists from "./expensesLists";
import { useLists } from "./hooks/useLists";
import { Modal } from "bootstrap";
import ModalWindow from "./modal";

const ExpensesTracker = () => {
   const { lists, newList, deleteList } = useLists();
   return (
      <>
         <ModalWindow />

         <div className="container">
            <ExpensesHeader />
            <hr />

            <div dir="rtl" className="row mt-3">
               <ExpensesLists lists={lists} />

               <ExpensesTable />
            </div>
         </div>
      </>
   );
};

export default ExpensesTracker;
