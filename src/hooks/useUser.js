import Axios from "axios";
import React, { useEffect, useState } from "react";

export default function useUser() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkAuth = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("/api/auth/tokenIsValid", null, {
        headers: {
          "x-auth-token": token,
        },
      });
      if (tokenRes.data) {
        const userRes = await Axios.get("/api/auth/getUser", {
          headers: {
            "x-auth-token": token,
          },
        });
        setUserData({ token, user: userRes.data });
      }
    };
    checkAuth();
  }, []);

  return { userData, setUserData };
}
