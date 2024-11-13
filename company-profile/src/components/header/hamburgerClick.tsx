"use client";

import { useEffect } from "react";

export default function useHamburgerClick(
  hamburgerID: string,
  navMenuID: string
) {
  useEffect(() => {
    const hamburgerMenu = document.getElementById(hamburgerID);
    const navMenu = document.getElementById(navMenuID);
    if (!hamburgerMenu || !navMenu) return;

    const toggleActiveClass = () => {
      hamburgerMenu.classList.toggle("hamburger-active");
      navMenu.classList.toggle("hidden");
    };

    // Add click event listeners
    hamburgerMenu.addEventListener("click", toggleActiveClass);

    // Add click listeners for each menu item
    navMenu.querySelectorAll("a").forEach((item) => {
      item.addEventListener("click", toggleActiveClass);
    });

    // Cleanup event listeners
    return () => {
      hamburgerMenu.removeEventListener("click", toggleActiveClass);
      navMenu.querySelectorAll("a").forEach((item) => {
        item.removeEventListener("click", toggleActiveClass);
      });
    };
  }, [hamburgerID, navMenuID]);

  return null;
}
