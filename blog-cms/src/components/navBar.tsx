import Link from "next/link";

export default function NavBar() {
  return (
    <div className="h-[50px] flex justify-center items-center gap-5 sticky top-0 bg-white opacity-90 font-bold border-b border-slate-500">
      <Link href={"#hero"}>Home</Link>
      <Link href={"#blog"}>Blog</Link>
    </div>
  );
}
