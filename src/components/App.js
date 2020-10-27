import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ResetPassPage from "../pages/ResetPassPage";
import UserContext from "../context/UserContext";
import Axios from "axios";
import useUser from "../hooks/useUser";
import { ToastContainer } from "react-toastify";

const StyledApp = styled.main`
  height: 100%;
`;
export default function App() {
  const { userData, setUserData } = useUser();
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <StyledApp>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/forgot-password" component={ResetPassPage} />
        </Switch>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </StyledApp>
    </UserContext.Provider>
  );
}
