"use client";

import HamburgerMenu from "./hamburgerMenu";
import NavMenu from "./navMenu";
import HamburgerClick from "./hamburgerClick";
import { useEffect } from "react";
import Link from "next/link";

export default function NavBar() {
  HamburgerClick("hamburger", "nav-menu");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function () {
        const header = document.querySelector("header") as HTMLElement | null;

        if (header) {
          const fixedNav = header.offsetTop;

          if (window.scrollY > fixedNav) {
            header.classList.add("navbar-fixed");
          } else {
            header.classList.remove("navbar-fixed");
          }
        }
      };

      return () => {
        window.onscroll = null;
      };
    }
  }, []);

  return (
    <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-30">
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative px-5 py-2 lg:mx-32">
          <Link
            href={"/"}
            className="font-semibold text-black lg:hover:opacity-70 lg:text-lg"
          >
            Muhammadwildansapoetro
          </Link>
          <HamburgerMenu />
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
