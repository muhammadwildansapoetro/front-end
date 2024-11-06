import axios from "../helpers/axios";
import { Field, Form, Formik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import { RegisterSchema } from "../helpers/schema";

interface FormValue {
  username: string;
  email: string;
  password: string;
}

function RegisterPage() {
  const navigate = useNavigate();
  const initialValue: FormValue = {
    username: "",
    email: "",
    password: "",
  };

  const handleAdd = async (user: FormValue) => {
    try {
      const response = await axios.post("/users", user);
      alert("User added successfully");
      if (response.status === 200) {
        navigate(`/users/${response.data.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="mt-10 w-[400px] border border-slate-300 rounded-lg p-5 shadow-lg">
          <h1 className="text-xl font-bold mb-5">Create your account</h1>
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
                <Form className="flex flex-col gap-2">
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
                      placeholder=" Create your username"
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
                      placeholder=" Create your password"
                    />
                    {touched.password && errors.password ? (
                      <div className="text-red-500 text-xs">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                  <button
                    type="submit"
                    className="bg-teal-500 text-white rounded-md py-2 hover:bg-teal-600 hover:scale-95 mt-3"
                  >
                    Create
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
