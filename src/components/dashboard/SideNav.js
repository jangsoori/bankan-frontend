import styled from "@emotion/styled";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SideNavWrapper = styled.nav`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 5rem;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 2rem 0;
  justify-content: center;
`;
const User = styled.section`
  align-self: start;
  margin: 0 1rem;
`;
const UserAvatar = styled.section``;
const UserAvatarImg = styled.img`
  border-radius: 50%;
`;
const Links = styled.ul`
  display: grid;
  grid-auto-flow: row;
  justify-content: stretch;
  align-self: start;
`;
const Link = styled.li`
  padding: 2rem 1rem;
  text-align: center;

  i {
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 1rem;
  }
  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.green};
  }
`;

const Label = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;
export default function SideNav() {
  const history = useHistory();
  const [active, setActive] = useState(false);

  return (
    <SideNavWrapper>
      <User>
        <UserAvatar>
          <UserAvatarImg src="https://via.placeholder.com/50" />
        </UserAvatar>
      </User>
      <Links>
        <Link onClick={() => history.push("/dashboard")}>
          <i class="fas fa-home fa-2x"></i>
          <Label>Home</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/profile")}>
          <i class="fas fa-user fa-2x"></i>
          <Label>Profile</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/stats")}>
          <i class="fas fa-chart-pie fa-2x"></i>
          <Label>Statistics</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/projects/in-progress")}>
          <i class="fas fa-spinner fa-2x"></i>
          <Label>In progress</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/projects/finished")}>
          <i class="fas fa-check fa-2x"></i>
          <Label>Finished</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/projects/paused")}>
          <i class="fas fa-pause fa-2x"></i>
          <Label>Paused</Label>
        </Link>
        <Link onClick={() => history.push("/dashboard/projects/archived")}>
          <i class="fas fa-archive fa-2x"></i>
          <Label>Archived</Label>
        </Link>
      </Links>
    </SideNavWrapper>
  );
}
