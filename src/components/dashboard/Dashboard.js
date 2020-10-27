import React from "react";
import styled from "@emotion/styled";
import SideNav from "./SideNav";
import { Route, Switch } from "react-router-dom";
import Profile from "./content/Profile";
import Main from "./content/Main";

const StyledDashboard = styled.section`
  display: flex;
  height: 100%;
`;
export default function Dashboard() {
  return (
    <StyledDashboard>
      <SideNav />
      <Switch>
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard" component={Main} />
      </Switch>
    </StyledDashboard>
  );
}
