import Link from "next/link";

export default function Logo() {
  return (
    <div className="border rounded-full px-4 bg-slate-800">
      <Link href={"/"}>
        <span className="text-color2 text-xl lg:text-2xl font-bold">Farm</span>
        <span className="text-color4 text-xl lg:text-2xl font-bold">Link</span>
      </Link>
    </div>
  );
}
