import Link from "next/link";

export default function NavBar() {
  return (
    <section className="w-full border-b border-slate-30 sticky top-0 z-10 bg-white opacity-90  ">
      <div className="h-[50px] flex justify-between items-center mx-5 lg:mx-40 gap-5 ">
        <div className=" text-teal-500  font-bold ">Muhammadwildansapoetro</div>
        <div className="font-bold flex gap-1 lg:gap-10">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Category</Link>
        </div>
      </div>
    </section>
  );
}
