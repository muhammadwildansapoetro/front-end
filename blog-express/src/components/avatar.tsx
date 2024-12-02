"use client";

import useSession from "@/app/hooks/useSession";
import Link from "next/link";

export default function Avatar() {
  const { user, isAuth } = useSession();
  console.log(isAuth);

  return (
    <div>
      {isAuth ? (
        <div>User: {user?.username}</div>
      ) : (
        <div className="mb-10 flex flex-col items-center justify-center gap-2 font-medium">
          <p>Please sign in to start writing</p>
          <div className="flex gap-5">
            <Link
              href={"/register"}
              className="flex rounded-full border border-black px-3 py-1 font-semibold hover:bg-black hover:text-white"
            >
              Register
            </Link>
            <Link
              href={"/sign-in"}
              className="flex rounded-full border border-black bg-black px-3 py-1 font-semibold text-white hover:bg-white hover:text-black"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
