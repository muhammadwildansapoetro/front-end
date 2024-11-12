"use client";

import { useEffect } from "react";

export default function HamburgerClick(hamburgerID: string, navMenuID: string) {
  useEffect(() => {
    const hamburgerMenu = document.querySelector(`#${hamburgerID}`);
    const navMenu = document.querySelector(`#${navMenuID}`);

    if (hamburgerMenu && navMenu) {
      const toggleActiveClass = () => {
        hamburgerMenu.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      };

      hamburgerMenu.addEventListener("click", toggleActiveClass);

      return () =>
        hamburgerMenu.removeEventListener("click", toggleActiveClass);
    }
  }, [hamburgerID, navMenuID]);
}
