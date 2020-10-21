import styled from "@emotion/styled";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const StyledApp = styled.main`
  height: 100%;
`;
export default function App() {
  return (
    <StyledApp>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </StyledApp>
  );
}
