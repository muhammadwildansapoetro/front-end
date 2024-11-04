import Link from "next/link";

export default function NavBar() {
  return (
    <div className="h-[50px] flex justify-center items-center bg-white text-slate-800 gap-5 border-b border-slate-800 font-bold">
      <Link href={"/"}>Home</Link>
      <Link href={"/user"}>User</Link>
      <Link href={"/user/register"}>Register</Link>
    </div>
  );
}
