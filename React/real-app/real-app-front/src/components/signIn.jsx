import Input from "./common/input";
import PageHeader from "./common/pageHeader";

import Joi from "joi";
import { useFormik } from "formik";

const SignIn = () => {
   const form = useFormik({
      validateOnMount: true,
      initialValues: { email: "", password: "" },
      validate(values) {
         const schema = Joi.object({
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
      <>
         <PageHeader title={"Sign In"} />
         <form onSubmit={form.handleSubmit}>
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
               Log-in
            </button>
         </form>
      </>
   );
};

export default SignIn;
