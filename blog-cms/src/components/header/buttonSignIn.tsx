"use client";

import { signInWithGoogle } from "@/libs/auth";
import Image from "next/image";

export default function ButtonSignin() {
  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center gap-1 font-bold text-slate-800 mx-4 lg:text-lg lg:my-0 lg:hover:opacity-70"
    >
      <Image src={"/google.png"} alt="google logo" width={20} height={20} />
      Sign in
    </button>
  );
}
