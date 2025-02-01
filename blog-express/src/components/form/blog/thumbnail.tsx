"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FormikProps } from "formik";
import { IBlogInput } from "@/types/blog";

interface FieldThumbnailProps {
  name: string;
  formik: FormikProps<IBlogInput>;
  className?: string;
}

export const FieldThumbnail: React.FC<FieldThumbnailProps> = ({
  name,
  formik,
  className = "",
}) => {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      formik.setFieldValue(name, file);
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        ref={imgRef}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
      />
      {!previewUrl ? (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-500 md:h-[150px] md:w-[150px]"
        >
          +
        </div>
      ) : (
        <div
          onClick={() => imgRef.current?.click()}
          className="flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-md border border-dashed border-gray-500 md:h-[150px] md:w-[150px]"
        >
          <Image
            src={previewUrl}
            alt="Preview"
            width={150}
            height={150}
            layout="responsive"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};
