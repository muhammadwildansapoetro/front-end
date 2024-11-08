"use client";

export default function HamburgerMenu() {
  return (
    <div className="flex items-center">
      <button
        id="hamburger"
        name="hamburger"
        type="button"
        className="block absolute right-5 lg:hidden"
        aria-label="Open navigation menu"
      >
        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
        <span className="hamburger-line transition duration-300 ease-in-out"></span>
        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
      </button>
    </div>
  );
}
