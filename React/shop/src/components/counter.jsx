const Counter = ({
   max,
   value,
   onIncrement = () => {},
   onDecrement = () => {},
}) => {
   return (
      <>
         <button
            onClick={() => {
               if (value !== 0) {
                  onDecrement();
               }
            }}
            className="btn btn-danger"
            disabled={value === 0}
         >
            -
         </button>
         <span className="mx-2">{value}</span>
         <button
            onClick={() => {
               if (!max) {
                  onIncrement();
               }
            }}
            className="btn btn-success"
            disabled={max}
         >
            +
         </button>
         {max && (
            <div className="text-danger">The is no more of this product.</div>
         )}
      </>
   );
};

export default Counter;
<div>counter</div>;
