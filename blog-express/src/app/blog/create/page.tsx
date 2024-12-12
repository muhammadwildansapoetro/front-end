"use client";

import React, { useEffect, useState } from "react";
import { BlogInput } from "@/types/blog";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import RichTextEditor from "@/components/form/blog/textEditor";
import Wrapper from "@/components/wrapper";
import { createSlug } from "@/helpers/createSlug";
import { FieldThumbnail } from "@/components/form/blog/thumbnail";
import { toast } from "react-toastify";
import { revalidate } from "@/libs/action";
import { useRouter } from "next/navigation";

export const blogSchema = Yup.object({
  title: Yup.string()
    .min(5, "Title must be at least 5 characters long")
    .max(100, "Title must be at most 100 characters long")
    .required("Title is required"),
  category: Yup.string().required("Category is required"),
  content: Yup.string()
    .min(20, "Content must be at least 20 characters long")
    .required("Content is required"),
  image: Yup.mixed<File>()
    .required("Image is required")
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

const initialValues: BlogInput = {
  title: "",
  category: "",
  slug: "",
  content: "",
  image: "",
};

export default function BlogCreatePage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const onCreate = async (data: BlogInput) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      for (let key in data) {
        const item = data[key as keyof BlogInput];
        if (item) {
          formData.append(key, item);
        }
      }
      const res = await fetch("http://localhost:8000/api/blogs", {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      revalidate("blogs");
      router.push("/");
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Formik
        initialValues={initialValues}
        validationSchema={blogSchema}
        onSubmit={(values, actions) => {
          onCreate(values);
          actions.resetForm();
        }}
      >
        {(props) => {
          useEffect(() => {
            props.setFieldValue("slug", createSlug(props.values.title));
          }, [props.values.title, props.setFieldValue]);

          return (
            <Form className="flex w-full flex-col gap-3">
              <div>
                <label
                  htmlFor="title"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Title
                </label>
                <Field
                  name="title"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-[gray-900] focus:border-blue-500 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="title"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="slug"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Slug
                </label>
                <input
                  type="text"
                  name="slug"
                  value={props.values.slug}
                  readOnly
                  disabled
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Category
                </label>
                <Field
                  name="category"
                  as="select"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">~ Pilih Category ~</option>
                  <option value="Programming">Programming</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Geographic Information System">
                    Geographic Information System
                  </option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Image
                </label>
                <FieldThumbnail name="image" formik={props} />
                <ErrorMessage
                  name="image"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Content
                </label>
                <RichTextEditor setFieldValue={props.setFieldValue} />
                <ErrorMessage
                  name="content"
                  component="span"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="flex sm:justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="h-[40px] w-full rounded-lg bg-[#383839] text-[#f5f5f7] hover:bg-[#595959] disabled:cursor-not-allowed sm:w-[120px]"
                >
                  {`${isLoading ? "Loading..." : "Create Post"}`}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
}
