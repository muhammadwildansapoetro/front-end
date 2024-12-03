"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function VerifyPage({ params }: { params: { token: string } }) {
  const router = useRouter();
  const onVerify = async () => {
    try {
      const res = await fetch(
        `http://localhost:8000/api/auth/verify/${params.token}`,
        {
          method: "PATCH",
        },
      );
      const result = await res.json();
      if (!res.ok) throw result;
      toast.success(result.message);
      router.push("/sign-in");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
      router.push("/");
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div className="flex h-screen items-center justify-center">
      {/* <button
        onClick={onVerify}
        className="rounded-md bg-black px-3 py-1 text-lg text-white"
      >
        Verify
      </button> */}
    </div>
  );
}
