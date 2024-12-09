"use client";

import React, { useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

interface AvatarFormValues {
  avatar: File | null;
}

const AvatarSchema = Yup.object().shape({
  avatar: Yup.mixed<File>()
    .required("Avatar is required")
    .test(
      "fileSize",
      "File terlalu besar (maksimal 2MB)",
      (value) =>
        !value || (value instanceof File && value.size <= 2 * 1024 * 1024),
    )
    .test(
      "fileType",
      "Format file tidak didukung (hanya .jpeg, .png, .jpg, .webp)",
      (value) =>
        !value ||
        (value instanceof File &&
          ["image/jpeg", "image/png", "image/jpg", "image/webp"].includes(
            value.type,
          )),
    ),
});

const EditAvatar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const initialValues: AvatarFormValues = {
    avatar: null,
  };

  const handleSubmit = async (values: AvatarFormValues) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (values.avatar) {
        formData.append("file", values.avatar);
      }
      const res = await fetch("http://localhost:8000/api/users/avatar-cloud", {
        method: "PATCH",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
    } catch (err: any) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-sm rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold text-gray-700">Edit Avatar</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={AvatarSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label
                htmlFor="avatar"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Avatar
              </label>
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files?.[0] || null;
                  setFieldValue("avatar", file);
                }}
                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-black hover:file:bg-blue-100"
              />
              <ErrorMessage
                name="avatar"
                component="div"
                className="mt-1 text-sm text-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full rounded-md bg-black px-4 py-2 text-white hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-orange-100"
            >
              {isLoading ? "Loading ..." : "Upload"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditAvatar;
