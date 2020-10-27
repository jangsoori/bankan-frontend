import React from "react";
import styled from "@emotion/styled";
import SideNav from "./SideNav";
import { Route, Switch } from "react-router-dom";
import Profile from "./content/Profile";
import Main from "./content/Home";

const StyledDashboard = styled.section`
  display: flex;
  height: 100%;
`;
const StyledContent = styled.section`
  padding: 3rem;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 4rem;
`;
export default function Dashboard() {
  return (
    <StyledDashboard>
      <SideNav />
      <StyledContent>
        <Switch>
          <Route exact path="/dashboard/profile" component={Profile} />
          <Route exact path="/dashboard" component={Main} />
        </Switch>
      </StyledContent>
    </StyledDashboard>
  );
}
