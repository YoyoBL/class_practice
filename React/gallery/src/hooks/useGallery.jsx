/*
    -index state
    -fn next
    -set isInfinite
    -fn previous
    -fn first
    -fn last
    -return {index, next, IsInfinite, previous, first, last}

*/
import { useState } from "react";

export const useGallery = (images = [], starting = 0, isInfinite = false) => {
   const [index, setIndex] = useState(starting);

   const nextImage = () => {
      if (index >= images.length - 1) {
         if (!isInfinite) {
            return;
         }

         setIndex(0);
         return;
      }

      setIndex((index) => index + 1);
   };

   const previousImage = () => {
      if (index <= 0) {
         if (!isInfinite) {
            return;
         }
         setIndex(images.length - 1);
         return;
      }

      setIndex((index) => index - 1);
   };

   const firstImage = () => {
      setIndex(0);
   };

   const lastImage = () => {
      setIndex(images.length - 1);
   };

   return {
      index,
      nextImage,
      previousImage,
      firstImage,
      lastImage,
   };
};
