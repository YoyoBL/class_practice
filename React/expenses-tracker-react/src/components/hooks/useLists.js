import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useLists = (initialValue = [{ title: "כללי", id: 1 }]) => {
   const [lists, setLists] = useState(initialValue);

   const newList = (title) => {
      const newList = { title, id: uuid() };
      setLists((lists) => [...lists, newList]);
   };

   const deleteList = (id) => {
      setLists((lists) => lists.filter((list) => list.id !== id));
   };

   return { lists, newList, deleteList };
};
