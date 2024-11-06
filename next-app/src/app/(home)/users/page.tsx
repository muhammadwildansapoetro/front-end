import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
  description: "About page",
};

export default function UserPage() {
  const data = [
    { id: "1", name: "Andi" },
    { id: "2", name: "Budi" },
    { id: "3", name: "Caca" },
  ];

  return (
    <div className="flex justify-center items-center h-96">
      <div className="flex justify-center items-center mt-10 h-96 w-full mx-5 border border-slate-700">
        <div className="flex flex-col border border-slate-500 p-3">
          {data.map((item, index) => {
            return (
              <Link href={`/user/${item.id}`} className="my-1" key={index}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
