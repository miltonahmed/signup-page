
import * as Yup from 'yup';

export const SignUpValidation = Yup.object({
  fullname: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .max(12, "Full Name can't be more than 12 characters")
    .required("Please Enter Your Full Name"),

  email: Yup.string()
    .email("Invalid Email Format")
    .required("Please Enter Your Email"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Please Enter Your Password"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Please Confirm Your Password"),
});

