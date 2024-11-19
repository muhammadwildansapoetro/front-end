"use client";

import action from "@/app/action";
import { Field, Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

interface FormValue {
  name: string;
  email: string;
  password: string;
}

function FormRegister() {
  const initialValue: FormValue = {
    name: "",
    email: "",
    password: "",
  };

  const handleAdd = async (user: FormValue) => {
    try {
      await fetch("http://localhost:8000/api/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "content-type": "application/json" },
      });
      action("users");
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
                  <label htmlFor="name" className="font-bold">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    className="border p-[1px] border-slate-500 rounded-md py-2"
                    placeholder=" Enter your name"
                  />
                  {touched.name && errors.name ? (
                    <div className="text-red-500 text-xs">{errors.name}</div>
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
                  className="font-bold bg-teal-500 text-white rounded-md py-2 hover:bg-teal-600 mt-3"
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
