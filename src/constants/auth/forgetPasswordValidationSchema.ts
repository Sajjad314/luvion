import { object, string } from "yup";

export const forgetPasswordValidationSchema = object({
  email: string().required("Required!").email("Email must be a valid email"),
});
