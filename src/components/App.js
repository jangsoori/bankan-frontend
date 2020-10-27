import styled from "@emotion/styled";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ResetPassPage from "../pages/ResetPassPage";
import UserContext from "../context/UserContext";
import useUser from "../hooks/useUser";
import { ToastContainer } from "react-toastify";
import Dashboard from "./dashboard/Dashboard";

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
          <Route exact path="/reset-password" component={ResetPassPage} />
          <Route path="/dashboard" component={Dashboard} />
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
