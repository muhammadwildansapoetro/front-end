import Link from "next/link";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center mx-10">
      <div className="flex flex-col justify-center items-center mt-10 h-96 w-full mx-5 border border-slate-700">
        <div className="text-6xl font-bold">WELCOME</div>
        <Link
          href={"/home"}
          className="text-3xl font-bold text-slate-700 hover:bg-teal-300 mt-10 border border-slate-800 rounded-full px-5 py-1"
        >
          Get in
        </Link>
      </div>
    </div>
  );
}
