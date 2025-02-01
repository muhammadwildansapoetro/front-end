import Link from "next/link";
import Avatar from "./avatar";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-10 border-b bg-white bg-opacity-95 py-1.5">
      <div className="mx-5 flex items-center justify-between lg:mx-20">
        <Link href={"/"} className="text-lg font-bold text-teal-600">
          Ngariung Blog
        </Link>
        <Avatar />
      </div>
    </div>
  );
}
