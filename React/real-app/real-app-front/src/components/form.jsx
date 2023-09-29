import Joi from "joi";
import Input from "./common/input";
import { useFormik } from "formik";

const Form = () => {
   const form = useFormik({
      validateOnMount: true,
      initialValues: { name: "", email: "", password: "" },
      validate(values) {
         const schema = Joi.object({
            name: Joi.string().min(6).max(255).required(),
            email: Joi.string()
               .min(2)
               .max(255)
               .required()
               .email({ tlds: { allow: false } }),
            password: Joi.string().min(6).max(1024).required(),
         });
         const { error } = schema.validate(values, { abortEarly: false });
         if (!error) {
            return null;
         }

         const errors = {};

         for (const detail of error.details) {
            const key = detail.path[0];
            errors[key] = detail.message;
         }

         return errors;
      },
      onSubmit(values) {
         console.log(values);
      },
   });

   function getFieldProps(name) {
      return {
         ...form.getFieldProps(name),
         error: form.touched[name] && form.errors[name],
      };
   }

   return (
      <form onSubmit={form.handleSubmit}>
         <Input
            {...getFieldProps("name")}
            label={"Name"}
            type={"text"}
            required
         />
         <Input
            {...getFieldProps("email")}
            label={"Email"}
            type={"email"}
            required
         />
         <Input
            {...getFieldProps("password")}
            label={"Password"}
            type={"password"}
            required
         />
         <button disabled={!form.isValid} className="btn btn-primary mt-2">
            Submit{" "}
         </button>
      </form>
   );
};

export default Form;
