import styled from "@emotion/styled";
import React from "react";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";

const StyledHome = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 4rem;
  background: ${({ theme }) => theme.colors.blue};
  padding: 2rem;
  height: 100%;
`;
export default function Home() {
  return (
    <StyledHome>
      <Header />
      <Hero />
    </StyledHome>
  );
}
