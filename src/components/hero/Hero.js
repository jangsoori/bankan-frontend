import { css } from "@emotion/core";
import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 50%;
`;
const TextWrapper = styled.section`
  display: grid;
  grid-auto-flow: rows;
  row-gap: 2rem;
  margin-bottom: 5rem;
`;
const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ big }) =>
    big &&
    css`
      font-size: 6rem;
      font-weight: medium;
    `}
  ${({ medium }) =>
    medium &&
    css`
      font-size: 3rem;
    `}
  ${({ small }) =>
    small &&
    css`
      font-size: 2rem;
    `};
`;

const Cta = styled.section`
  align-self: flex-start;
`;

const CtaLink = styled(Link)`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.pink};
  padding: 1rem 2rem;
  border-radius: 5px;
`;
export default function Hero() {
  return (
    <StyledHero>
      <TextWrapper>
        <Text medium>Meet Bankan</Text>
        <Text big>Project management tool of your dreams</Text>
        <Text small>Take full control over your project life span</Text>
      </TextWrapper>
      <Cta>
        <CtaLink>Get started</CtaLink>
      </Cta>
    </StyledHero>
  );
}
