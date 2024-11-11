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
            className="flex font-bold mx-4 my-2 lg:text-xl lg:my-0 text-color1 lg:hover:opacity-70"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"/about"}
            className="flex font-bold mx-4 my-2 lg:text-xl lg:my-0 text-color1  hover:opacity-70"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href={"/products"}
            className="flex font-bold mx-4 my-2 lg:text-xl lg:my-0 text-color1 hover:opacity-70"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href={"/teams"}
            className="flex font-bold mx-4 my-2 lg:text-xl lg:my-0 text-color1  hover:opacity-70"
          >
            Teams
          </Link>
        </li>
      </ul>
    </div>
  );
}
