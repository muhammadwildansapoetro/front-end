import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../types/user";
import axios from "../helpers/axios";

function ProfilPage() {
  const [user, setUser] = useState<IUser | null>(null);
  const { userId } = useParams();

  const getData = async () => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h1
        className="relative w-[max-content] font-mono font-bold before:absolute before:inset-0 before:animate-typewriter 
        before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-slate-700 text-3xl text-slate-700 mt-5"
      >
        Welcome {user?.username}
      </h1>
      <div className="border p-3 border-slate-300 rounded-lg mt-5 w-[300px]">
        <h1 className="font-bold text-xl mb-2">Profil Detail</h1>

        <h1>ID : {user?.id}</h1>
        <h1>Username : {user?.username}</h1>
        <h1>Email : {user?.email}</h1>
        <h1>Password : {user?.password}</h1>
      </div>
    </div>
  );
}

export default ProfilPage;
