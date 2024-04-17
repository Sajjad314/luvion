import { object, string } from "yup";

export const signUpValidationSchema = object({
  name: string().required("Required!").min(6, "Min 6 Character Needed"),
  email: string().required("Required!").email("Email must be a valid email"),

  phone: string()
    .required("Phone number is required")
    .matches(/^(4|9|2)\d{7}$/, "Invalid Norwegian phone number"),
  password: string().required("Required!").min(6, "Min 6 Character Needed"),
});
