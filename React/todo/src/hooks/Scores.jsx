import { useState } from "react";
import { v4 as uuid } from "uuid";

export const useScoreLogger = () => {
   const [state, setState] = useState([]);

   const add = (name, score) => {
      const newScore = { id: uuid(), name, score };
      setState((state) => [...state, newScore]);
   };

   const remove = () => {};
   return {
      state,
      add,
      remove,
   };
};
