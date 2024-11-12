"use client";

import Link from "next/link";

export default function NavMenu() {
  return (
    <div
      id="nav-menu"
      className="hidden absolute top-full right-7 p-1 bg-white shadow-lg rounded-lg
        bg-opacity-80 lg:block lg:static lg:bg-transparent lg-max-w-full lg:shadow-none"
    >
      <ul className="block lg:flex lg:gap-5">
        <li className="group">
          <Link
            href={"/"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href={"/category"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Category
          </Link>
        </li>
        <li>
          <Link
            href={"/contact"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 lg:hover:opacity-70"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
