import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="bg-[#222831] text-[#EEEEEE] flex justify-between px-5 py-5 text-2xl">
      <Link
        to={"/about"}
        className="hover:text-[#00ADB5] text-xl hover:font-bold underline-offset-auto"
      >
        Muhammad Wildan
        <br />a web developer
      </Link>

      <button className="bg-transparent border-2 border-[#00ADB5] flex items-center px-3 rounded-full h-fit hover:bg-[#00ADB5]">
        Let's get in touch
      </button>
    </div>
  );
}

export default NavBar;
