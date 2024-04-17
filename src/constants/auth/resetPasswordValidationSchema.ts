import { object, ref, string } from "yup";

export const resetPasswordValidationSchema = object({
  token: string().required("Required!"),
  password: string().required("Required!").min(6, "Min 6 Character Needed"),
  confirmPassword: string()
    .oneOf([ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
});
