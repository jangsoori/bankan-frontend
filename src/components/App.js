import styled from "@emotion/styled";
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ResetPassPage from "../pages/ResetPassPage";

const StyledApp = styled.main`
  height: 100%;
`;
export default function App() {
  return (
    <StyledApp>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/forgot-password" component={ResetPassPage} />
      </Switch>
    </StyledApp>
  );
}
