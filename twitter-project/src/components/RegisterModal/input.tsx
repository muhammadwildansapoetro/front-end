import { useField } from "formik";
import React from "react";

interface InputProps {
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ name, type, placeholder }) => {
  const [field, meta] = useField(name);
  return (
    <div>
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        className="border p-[1px] border-slate-500 rounded-md py-2"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs">{meta.error}</div>
      ) : null}
    </div>
  );
};
