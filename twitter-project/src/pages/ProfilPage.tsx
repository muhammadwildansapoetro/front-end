import { useEffect, useState } from "react";
import { IUser } from "../types/user";
import { useParams } from "react-router-dom";
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
      <h1>Profl Page {user?.username}</h1>
    </div>
  );
}

export default ProfilPage;
