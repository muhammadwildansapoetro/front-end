"use client";
import { useState } from "react";
import { IoLink, IoCheckmarkCircleOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyButton({ link }: { link: string }) {
  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean>(false);
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        copy(link);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
    >
      {copied ? <IoCheckmarkCircleOutline /> : <IoLink />}
    </div>
  );
}
