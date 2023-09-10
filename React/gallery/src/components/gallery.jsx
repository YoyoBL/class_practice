import { useState } from "react";
import { useGallery } from "../hooks/useGallery";

function Gallery({ imagesList = [], isInfinite = false, starting = 0 }) {
   const { index, nextImage, previousImage, firstImage, lastImage } =
      useGallery(imagesList, starting, isInfinite);

   const currentImage = imagesList[index];

   return (
      <div className="text-center d-flex flex-column align-items-center">
         <div>
            {index + 1}/{imagesList.length}
         </div>
         <div className="position-relative" style={{ width: "fit-content" }}>
            <img src={currentImage.url} alt={currentImage.alt} />
            <span
               onClick={() => {
                  previousImage();
               }}
               className="fs-1 btn btn-secondary position-absolute top-50 start-0 translate-middle-y"
            >
               {"<"}
            </span>

            <span
               onClick={() => {
                  nextImage();
               }}
               className="fs-1 btn btn-secondary position-absolute top-50 end-0 translate-middle-y"
            >
               {">"}
            </span>
         </div>
         <span>{currentImage.description}</span>
         <div className="mt-3">
            <button
               onClick={() => {
                  firstImage();
               }}
               className="btn btn-secondary me-3"
            >
               First
            </button>
            <button
               onClick={() => {
                  lastImage();
               }}
               className="btn btn-secondary me-3"
            >
               Last
            </button>
         </div>
      </div>
   );
}

export default Gallery;
