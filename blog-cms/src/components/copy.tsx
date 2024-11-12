"use client";
import { useState } from "react";
import { IoLink, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ link }: { link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div
      className="cursor-pointer lg:hover:text-teal-500"
      onClick={() => {
        copy(link);
        setCopied(true);
        // setTimeout(() => setCopied(false), 2000);
      }}
      onMouseLeave={() => setCopied(false)}
      data-cy="copy-button"
    >
      {copied ? (
        <IoCheckmarkCircleOutline data-cy="check-icon" />
      ) : (
        <IoLink data-cy="link-icon" />
      )}
    </div>
  );
}
