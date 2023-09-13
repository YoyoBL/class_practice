import { useState } from "react";

export const useExpenses = () => {
   const [expenses, setExpenses] = useState([]);

   return { expenses, expensesLists };
};
