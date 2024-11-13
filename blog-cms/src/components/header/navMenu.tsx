"use client";

import Link from "next/link";
import ButtonSignin from "./buttonSignIn";
import { DiVim } from "react-icons/di";
import supabase from "@/services/supabase";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import Avatar from "./avatar";

export default function NavMenu() {
  const [user, setUser] = useState<User | null>(null);

  const getSession = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <div
      id="nav-menu"
      className="hidden absolute top-full right-7 p-5 lg:p-1 bg-white shadow-lg rounded-lg
        bg-opacity-95 lg:block lg:static lg:bg-transparent lg-max-w-full lg:shadow-none"
    >
      <ul className="block lg:flex lg:items-center lg:gap-5">
        <li className="group">
          <Link
            href={"/"}
            className="flex font-bold mx-4 mb-5 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="flex font-bold mx-4 mb-5 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href={"/category"}
            className="flex font-bold mx-4 mb-5 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Category
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="flex font-bold mx-4 mb-5 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Contact
          </Link>
        </li>
        <li>
          {user ? (
            <Avatar
              picture={user.user_metadata.picture}
              full_name={user.user_metadata.full_name}
              email={user.user_metadata.email}
            />
          ) : (
            <ButtonSignin />
          )}
        </li>
      </ul>
    </div>
  );
}
