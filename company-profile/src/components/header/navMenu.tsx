"use client";

import Link from "next/link";

export default function NavMenu() {
  return (
    <div
      id="nav-menu"
      className="hidden absolute top-full right-7 p-1 bg-white shadow-lg rounded-lg
        bg-opacity-80 lg:block lg:static lg:bg-transparent lg-max-w-full lg:shadow-none"
    >
      <ul className="block lg:flex lg:gap-10">
        <li className="group">
          <Link
            href={"/"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:scale-110"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1  hover:scale-110"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href={"/services"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:scale-110"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href={"/teams"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1  hover:scale-110"
          >
            Teams
          </Link>
        </li>
      </ul>
    </div>
  );
}
