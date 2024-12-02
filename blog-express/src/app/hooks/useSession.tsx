import { IUser } from "@/types/blog";
import { useEffect, useState } from "react";

export default function useSession() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [user, setUser] = useState<IUser | null>(null);

  const checkSession = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/users/profile", {
        method: "GET",
        credentials: "include",
      });

      const result = await res.json();

      if (!res.ok) throw result;

      setUser(result.user);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  return { user, isAuth };
}
