import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser(token);
    }
  }, [user]);
  return user;
}

export const AuthContext = createContext();
