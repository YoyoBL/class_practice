import { useState } from "react";

export const useError = (...inputsNames) => {
   const [error, setError] = useState(null);
   const emptyFieldMessage = "Field is Empty";

   const checkEmptyInputs = (...inputs) => {
      for (let i in inputs) {
         if (!inputs[i]) {
            setError((error) => ({ ...error, [inputsNames[i]]: true }));
         }
      }
   };
   const resetError = (input) => {
      setError((error) => ({ ...error, [input]: false }));
   };

   return {
      error,
      checkEmptyInputs,
      emptyFieldMessage,
      resetError,
   };
};
