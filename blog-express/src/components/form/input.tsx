import { Field, FormikProps } from "formik";
import { HTMLInputTypeAttribute } from "react";

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  formik: FormikProps<any>;
  type?: HTMLInputTypeAttribute;
}

export const Input = ({
  name,
  formik,
  label,
  type = "text",
  placeholder = name,
}: IProps) => {
  const { handleChange, values, touched, errors } = formik;
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Field
        type={type}
        name={name}
        onChange={handleChange}
        value={values[name]}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
      />
      {touched[name] && typeof errors[name] === "string" ? (
        <div className="text-xs text-red-500">{errors[name]}</div>
      ) : null}
    </div>
  );
};
