import styled from "@emotion/styled";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAuth, { AuthContext } from "../../hooks/useAuth";
import Logo from "../common/Logo";

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

const NavItem = styled(Link)`
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  padding: 1rem 2rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export default function Header() {
  const user = useContext(AuthContext);
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledNav>
        {!user ? (
          <>
            <NavItem to="/login">Log in</NavItem>
            <NavItem to="/signup">Sign up</NavItem>
          </>
        ) : (
          <>
            <NavItem to="/login">Dashboard</NavItem>
            <NavItem to="/signup">Log out</NavItem>
          </>
        )}
      </StyledNav>
    </StyledHeader>
  );
}
