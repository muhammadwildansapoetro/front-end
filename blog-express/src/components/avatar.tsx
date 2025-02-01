"use client";

import Link from "next/link";
import AvatarMenu from "./avatarMenu";
import { deleteCookie } from "@/libs/action";
import { useSession } from "@/context/useSession";
import { useRouter } from "next/navigation";

export default function Avatar() {
  const router = useRouter();
  const { user, isAuth, setIsAuth } = useSession();
  const onSignOut = () => {
    deleteCookie("token");
    setIsAuth(false);
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <div>
      {isAuth ? (
        <div className="flex items-center justify-center gap-5">
          <Link
            href={"/blog/create"}
            className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
          >
            Write a post
          </Link>
          <AvatarMenu user={user} onSignOut={onSignOut} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 font-medium">
          <div className="flex gap-2">
            <Link
              href={"/blog/create"}
              className="flex rounded-lg border border-black px-3 py-1 font-semibold hover:bg-black hover:text-white"
            >
              Write post
            </Link>
            <Link
              href={"/sign-in"}
              className="flex rounded-lg border border-black bg-black px-3 py-1 font-semibold text-white hover:bg-white hover:text-black"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
