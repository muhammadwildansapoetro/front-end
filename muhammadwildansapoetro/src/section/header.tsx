import img from "../assets/hamburger-line.png";

function Header() {
  return (
    <header className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-20">
            <a
              href="#home"
              className="font-semibold block text-accent py-5 lg:px-4"
            >
              Muhammadwildan
            </a>
          </div>

          <div className="flex items-center px-5">
            <button
              id="hambuger"
              name="hamburger"
              type="button"
              className="block absolute right-20 lg:right-48 sm:hidden"
            >
              <img
                src={img}
                alt="hamburger-line"
                className="w-[30px] my-2 block"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
