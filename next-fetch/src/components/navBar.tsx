import Link from "next/link";

export default function NavBar() {
  return (
    <div className="h-[50px] flex justify-center items-center bg-white  gap-5 border-b border-slate-800 font-bold">
      <Link href={"/"} className="text-slate-800 hover:text-opacity-70">
        Home
      </Link>
      <Link href={"/user"} className="text-slate-800 hover:text-opacity-70">
        User
      </Link>
      <Link
        href={"/user/register"}
        className="text-slate-800 hover:text-opacity-70"
      >
        Register
      </Link>
    </div>
  );
}
