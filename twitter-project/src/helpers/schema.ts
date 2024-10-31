import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

