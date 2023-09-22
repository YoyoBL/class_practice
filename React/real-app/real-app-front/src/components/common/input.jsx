const Input = () => {
   return (
      <form>
         <div className="form-group my-1">
            <label htmlFor="email">
               Email <span className="text-danger">*</span>
            </label>
            <input id="email" className="form-control is-invalid" type="text" />
            <span className="invalid-feedback">error</span>
         </div>
      </form>
   );
};

export default Input;
