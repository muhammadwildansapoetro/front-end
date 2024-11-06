import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex justify-between items-center gap-5 p-5 text-lg font-bold text-slate-700 h-[50px] border border-slate-300">
      <h1 className="text-accent1">Ngariung</h1>
      <Link className="hover:scale-110 hover:text-accent" to={"/profil"}>
        Profil
      </Link>
    </div>
  );
}

export default NavBar;
