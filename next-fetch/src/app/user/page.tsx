import { IUser } from "@/types/user";
import { log } from "console";

async function getData(): Promise<IUser[]> {
  const res = await fetch("http://localhost:2000/users");

  if (!res.ok) {
    throw new Error("Faled to fetch data");
  }

  return res.json();
}

export default async function UserPage() {
  const data = await getData();
  console.log(data);

  return (
    <div className="flex flex-col justify-center items-center p-5">
      <h1 className="font-bold text-2xl mb-3">Users Data</h1>
      <table className="table-auto  border-collapse text-xl">
        <thead className="bg-slate-300">
          <tr>
            <th className="p-1 text-center border border-slate-400">No.</th>
            <th className="p-1 text-center border border-slate-400">
              Username
            </th>
            <th className="p-1 text-center border border-slate-400">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index} className="hover:bg-slate-100">
                <td className="p-1 text-center border border-slate-400">
                  {index + 1}
                </td>
                <td className="p-1 text-left border border-slate-400 cursor-pointer">
                  {item.username}
                </td>
                <td className="p-1 text-left border border-slate-400">
                  {item.email}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
