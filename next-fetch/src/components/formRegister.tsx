"use client";

import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface FormValue {
  username: string;
  email: string;
  password: string;
}

function FormRegister() {
  const initialValue: FormValue = {
    username: "",
    email: "",
    password: "",
  };

  const handleAdd = async (user: FormValue) => {
    try {
      await fetch("http://localhost:2000/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
      alert("User added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mt-10 w-[500px] border border-slate-300 rounded-lg p-5 shadow-lg">
        <h1 className="text-2xl font-bold mb-5">Register Form</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleAdd(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<FormValue>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="flex flex-col gap-2 ">
                <div className="flex flex-col gap-1">
                  <label htmlFor="username" className="font-bold">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    className="border p-[1px] border-slate-500 rounded-md py-2"
                    placeholder=" Enter your username"
                  />
                  {touched.username && errors.username ? (
                    <div className="text-red-500 text-xs">
                      {errors.username}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-bold">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    className="border p-[1px] border-slate-500 rounded-md py-2"
                    placeholder=" Enter your email"
                  />
                  {touched.email && errors.email ? (
                    <div className="text-red-500 text-xs">{errors.email}</div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="border p-[1px] border-slate-500 rounded-md py-2"
                    placeholder=" Enter your password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-red-500 text-xs">
                      {errors.password}
                    </div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="font-bold bg-teal-500 text-white rounded-md py-2 hover:bg-teal-600 hover:scale-95 mt-3"
                  onClick={() => handleAdd(values)}
                >
                  Register
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default FormRegister;
