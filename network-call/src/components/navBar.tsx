import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-center items-center gap-5 p-5 text-lg font-bold text-slate-700 h-[50px] border border-slate-300">
      <Link className="hover:scale-110 hover:text-accent" to={"/"}>
        Home
      </Link>
      <Link className="hover:scale-110 hover:text-accent" to={"/register"}>
        Register
      </Link>
      <Link className="hover:scale-110 hover:text-accent" to={"/users"}>
        Users
      </Link>
    </div>
  );
}

export default NavBar;
