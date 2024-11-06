import { useEffect, useState } from "react";
import axios from "../helpers/axios";
import { IUser } from "../types/user";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<IUser[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  const getData = async () => {
    try {
      const { data } = await axios.get("/users");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (user: IUser) => {
    const confirmSubmit = confirm(
      `Are you sure you want to delete ${user.username} user data?`
    );

    if (confirmSubmit) {
      try {
        await axios.delete(`/users/${user.id}`);
        setReload(!reload);
        alert(`${user.username} deleted successfully`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, [reload]);

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
            <th className="p-1 text-center border border-slate-400"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr key={index} className="hover:bg-slate-100">
                <td className="p-1 text-center border border-slate-400">
                  {index + 1}
                </td>
                <td
                  className="p-1 text-left border border-slate-400 cursor-pointer"
                  onClick={() => navigate(`/${item.id}`)}
                >
                  {item.username}
                </td>
                <td className="p-1 text-left border border-slate-400">
                  {item.email}
                </td>
                <td className="p-1 text-left border border-slate-400">
                  <MdDeleteOutline
                    className="text-red-500 text-xl hover:scale-125 cursor-pointer"
                    onClick={() => handleDelete(item)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UsersPage;
