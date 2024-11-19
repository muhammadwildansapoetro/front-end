import DeleteUser from "@/components/deleteUser";
import { IUser } from "@/types/user";
import { log } from "console";
import { revalidateTag } from "next/cache";

async function getData(): Promise<{ users: IUser[] }> {
  const res = await fetch("http://localhost:8000/api/users");

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
      <table className="table-auto border-collapse text-xl">
        <thead className="bg-slate-300">
          <tr>
            <th className="p-1 text-center border border-slate-400">No.</th>
            <th className="p-1 text-center border border-slate-400">Name</th>
            <th className="p-1 text-center border border-slate-400">Email</th>
            <th className="p-1 text-center border border-slate-400"></th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((item, index) => {
            return (
              <tr key={index} className="hover:bg-slate-100">
                <td className="p-1 text-center border border-slate-400">
                  {index + 1}
                </td>
                <td className="p-1 text-left border border-slate-400 cursor-pointer">
                  {item.name}
                </td>
                <td className="p-1 text-left border border-slate-400">
                  {item.email}
                </td>
                <DeleteUser id={item.id} />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
