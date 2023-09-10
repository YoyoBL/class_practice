const Menu = ({ onDifficulty = () => {} }) => {
   return (
      <div className="d-flex flex-column bg-white rounded-3 text-center mx-auto p-5">
         <h1 className="mb-3">
            Mem<i className="bi bi-lightbulb"></i>ry Game
         </h1>

         <h4 className="mb-3 p-1 px-2 border border-info border-2 text-info">
            Difficulty level
         </h4>

         <button
            onClick={() => onDifficulty(12)}
            className="col-md-6 mx-auto btn btn-info mb-3"
         >
            Easy (12)
         </button>
         <button
            onClick={() => onDifficulty(16)}
            className="col-md-6 mx-auto btn btn-info mb-3"
         >
            Medium (16)
         </button>
         <button
            onClick={() => onDifficulty(20)}
            className="col-md-6 mx-auto btn btn-info mb-3"
         >
            Hard (20)
         </button>
      </div>
   );
};

export default Menu;
