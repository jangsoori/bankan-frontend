import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../common/Logo";
import Cookies from "js-cookie";
import UserContext from "../../context/UserContext";
import useAuth from "../../hooks/useAuth";

//!Styling
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
`;
const StyledLogo = styled(Logo)``;
const StyledNav = styled.nav`
  display: grid;
  column-gap: 1rem;
  grid-auto-flow: column;
`;

const NavItem = styled.button`
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  padding: 1rem 2rem;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

//!main
export default function Header() {
  const user = useContext(UserContext);
  const { logout } = useAuth();
  const history = useHistory();

  console.log(user);
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledNav>
        {user.userData.token && user.userData.user ? (
          <>
            <NavItem onClick={() => history.push("/")}>Dashboard</NavItem>
            <NavItem onClick={() => logout()} to="/">
              Log out
            </NavItem>
          </>
        ) : (
          <>
            <NavItem onClick={() => history.push("/login")}>Log in</NavItem>
            <NavItem onClick={() => history.push("/signup")}>Sign up</NavItem>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
}
