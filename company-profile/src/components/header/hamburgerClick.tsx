"use client";

import { useEffect } from "react";

export default function HamburgerClick(hamburgerID: string, navMenuID: string) {
  useEffect(() => {
    const hamburgerMenu = document.querySelector(`#${hamburgerID}`);
    const navMenu = document.querySelector(`#${navMenuID}`);
    const menuItems = navMenu?.querySelectorAll("Link"); // Select all anchor tags (menu items) inside the navMenu

    if (hamburgerMenu && navMenu) {
      const toggleActiveClass = () => {
        hamburgerMenu.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      };

      hamburgerMenu.addEventListener("click", toggleActiveClass);

      menuItems?.forEach((item) => {
        item.addEventListener("click", toggleActiveClass);
      });

      return () => {
        hamburgerMenu.removeEventListener("click", toggleActiveClass);
        if (menuItems) {
          menuItems.forEach((item) => {
            item.removeEventListener("click", toggleActiveClass);
          });
        }
      };
    }
  }, [hamburgerID, navMenuID]);
}
