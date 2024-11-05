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
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:text-teal-500  hover:scale-105"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href={"#about"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:text-teal-500 hover:scale-105"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            href={"#project"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:text-teal-500 hover:scale-105"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href={"/teams"}
            className="flex font-bold mx-4 my-2 lg:text-lg lg:my-0 text-color1 hover:text-teal-500 hover:scale-105"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
