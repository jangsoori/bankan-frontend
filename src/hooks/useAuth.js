import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Axios from "axios";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
export default function useAuth() {
  const user = useContext(UserContext);
  const history = useHistory();

  const signup = (email, password, passwordCheck, displayName) => {
    Axios.post("/api/auth/registerUser", {
      email,
      password,
      passwordCheck,
      displayName,
    })
      .then((res) => {
        toast.success("Success! You can now log in!");
        history.push("/login");
      })
      .catch((e) => {
        toast.error(e.response.data.msg);
      });
  };
  const login = (email, password) =>
    Axios.post(
      "/api/auth/loginUser",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
      .then((res) => {
        localStorage.setItem("auth-token", res.data.token);
        user.setUserData(res.data);
      })
      .then((res) => {
        toast.success("Successful login! Redirecting...");
        history.push("/");
      })
      .catch((e) => {
        toast.error(e.response.data.msg);
      });

  const logout = () => {
    localStorage.setItem("auth-token", "");
    user.setUserData({ token: null, user: null });
    toast.success("Logged out successfuly");
  };
  return { login, signup, logout };
}
