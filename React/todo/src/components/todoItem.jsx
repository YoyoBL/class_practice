// * TODO:
//  *  1. sync input value with state
//  *  2. on add clicked raise event
//  *  3. pass input to todos as part of add clicked
//  *  4.1 clear input after sending to todos
//  *  4.2 show error when relevant
//  *  4.3 disable add when error
//  *  5. on Enter key clicked submit form
//  */

const TodoItem = ({
   onDelete = () => {},
   onCompleteChange = () => {},
   todo: { id, task, isComplete, createdAt },
}) => {
   return (
      <div className="list-group-item">
         <div className="d-flex w-100 justify-content-between align-items-center">
            <input
               className="form-check-input"
               type="checkbox"
               id={`task-${id}`}
               onChange={(e) => onCompleteChange(id, e.target.checked)}
               checked={isComplete}
            />
            <label
               className={
                  "ms-2 flex-grow-1" +
                  (isComplete ? " text-decoration-line-through text-muted" : "")
               }
               htmlFor={`task-${id}`}
            >
               {task}
            </label>

            <small className="text-muted" style={{ fontSize: "0.5rem" }}>
               {createdAt.toLocaleString()}
            </small>

            <button
               onClick={() => onDelete(id)}
               className="btn btn-danger btn-sm ms-2"
            >
               <i className="bi bi-trash3"></i>
            </button>
         </div>
      </div>
   );
};

export default TodoItem;
