import hamburgerClick from "../script/script.tsx";

function Header() {
  hamburgerClick("hamburger", "nav-menu");
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-10">
            <a
              href="#home"
              className="font-semibold block text-accent py-5 lg:px-4"
            >
              Muhammadwildan
            </a>
          </div>

          <div className="flex items-center px-5">
            <button
              id="hamburger"
              name="hamburger"
              type="button"
              className="block absolute right-10"
            >
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav
              id="nav-menu"
              className="hidden absolute py-3 bg-white shadow-lg right-20 rounded-lg max-w-[250px] w-full top-full"
            >
              <ul className="block">
                <li className="group">
                  <a
                    href="#home"
                    className="text-base text-darker py-2 mx-8 group-hover:text-accent"
                  >
                    Home
                  </a>{" "}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
