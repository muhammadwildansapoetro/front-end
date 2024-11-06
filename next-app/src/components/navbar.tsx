import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-center items-center h-[50px] bg-slate-800 text-slate-100 gap-5 font-bold">
      <Link href={"/home"} className="hover:text-teal-400">
        Home
      </Link>
      <Link href={"/about"} className="hover:text-teal-400">
        About
      </Link>
      <Link href={"/users"} className="hover:text-teal-400">
        Users
      </Link>
      <Link href={"/"} className="hover:text-red-500">
        Get Out
      </Link>
    </div>
  );
}
