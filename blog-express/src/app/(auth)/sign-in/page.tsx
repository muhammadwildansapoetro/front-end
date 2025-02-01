"use client";

import { useSession } from "@/context/useSession";
import protectAfterAuth from "@/HOC/afterAuthProtection";
import { ISignIn } from "@/types/blog";
import { Field, Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  data: Yup.string().required("Username or email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function SignIn() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { setIsAuth, setUser } = useSession();
  const router = useRouter();
  const initialValue: ISignIn = {
    data: "",
    password: "",
  };

  const handleSignIn = async (user: ISignIn) => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL_BE!}/auth/sign-in`,
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "content-type": "application/json" },
        },
      );

      const result = await res.json();
      if (!res.ok) throw await result;
      router.push("/");
      localStorage.setItem("token", result.token);
      setIsAuth(true);
      setUser(result.user);
      toast.success(result.message);
    } catch (error) {
      console.log(error);
      toast.error("Error sign in");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex justify-center">
      <div className="mt-10 w-[500px] p-5 lg:rounded-lg lg:border lg:border-slate-300 lg:shadow-lg">
        <h1 className="mb-5 text-2xl font-bold">Sign in</h1>
        <Formik
          initialValues={initialValue}
          validationSchema={RegisterSchema}
          onSubmit={(values, action) => {
            handleSignIn(values);
            action.resetForm();
          }}
        >
          {(props: FormikProps<ISignIn>) => {
            const { handleChange, values, touched, errors } = props;
            return (
              <Form className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="data" className="font-semibold">
                    Username or Email
                  </label>
                  <Field
                    type="text"
                    name="data"
                    onChange={handleChange}
                    value={values.data}
                    className="rounded-md border border-slate-500 p-[1px] px-2 py-2"
                    placeholder=" Enter your username or email"
                  />
                  {touched.data && errors.data ? (
                    <div className="text-xs text-red-500">{errors.data}</div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    className="rounded-md border border-slate-500 p-[1px] px-2 py-2"
                    placeholder=" Enter your password"
                  />
                  {touched.password && errors.password ? (
                    <div className="text-xs text-red-500">
                      {errors.password}
                    </div>
                  ) : null}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="disabled:bg-teal mt-3 rounded-md bg-teal-600 py-2 font-medium text-white hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-700"
                >
                  {isLoading ? "Loading..." : "Sign in"}
                </button>
              </Form>
            );
          }}
        </Formik>

        <p className="mt-4 text-center">
          Don&apos;t have an account?{" "}
          <a href="/register" className="text-teal-600 hover:underline">
            Please register
          </a>
        </p>
      </div>
    </main>
  );
}

export default protectAfterAuth(SignIn);
