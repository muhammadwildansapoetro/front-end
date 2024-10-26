// Navbar Fixed
window.onscroll = function () {
  const header: any = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu
import { useEffect } from "react";

function HamburgerClick(hamburgerID: string, navMenuID: string) {
  useEffect(() => {
    const hamburger = document.querySelector(`#${hamburgerID}`);
    const navMenu = document.querySelector(`#${navMenuID}`);

    if (hamburger && navMenu) {
      const toggleActiveClass = () => {
        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
      };

      hamburger.addEventListener("click", toggleActiveClass);

      // Clean up the event listener on component unmount
      return () => {
        hamburger.removeEventListener("click", toggleActiveClass);
      };
    }
  }, [hamburgerID]);
}

export default HamburgerClick;
