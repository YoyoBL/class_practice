import Input from "./common/input";
import { useForm } from "../hooks/useForm";

const Form = () => {
   const { inputs, handleChange, handleSubmit } = useForm({
      initialValue: { name: "", email: "", password: "" },
      onSubmit(value) {
         console.log(value);
      },
   });

   return (
      <form onSubmit={handleSubmit}>
         <Input
            onChange={handleChange}
            name={"name"}
            value={inputs.name}
            label={"Name"}
            error={""}
            required
            type={"text"}
            onBlur={handleBlur}
         />
         <Input
            onChange={handleChange}
            name={"email"}
            value={inputs.email}
            label={"Email"}
            error={""}
            required
            type={"email"}
         />
         <Input
            onChange={handleChange}
            name={"password"}
            value={inputs.password}
            label={"Password"}
            error={""}
            required
            type={"password"}
         />
         <button>Submit </button>
      </form>
   );
};

export default Form;
