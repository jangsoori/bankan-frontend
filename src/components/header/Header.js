import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <StyledHeader>
      <StyledLogo />
      <StyledNav>
        <NavItem to="/login">Log in</NavItem>
        <NavItem to="/signup">Sign up</NavItem>
      </StyledNav>
    </StyledHeader>
  );
}
