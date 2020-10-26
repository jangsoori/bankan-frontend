import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { darken } from "polished";
export const Wrapper = styled.section`
  height: 100%;
  background: ${({ theme }) => theme.colors.blue};

  display: grid;
  row-gap: 5rem;

  place-items: center;
  place-content: center;
`;
export const StyledForm = styled.form`
  display: grid;
  grid-auto-flow: rows;
  gap: 2rem;
  background: ${({ theme }) => theme.colors.white};
  padding: 8rem 3rem;
  border-radius: 5px;
  width: 40rem;
`;
export const Title = styled.h3`
  color: black;
  font-size: 3rem;
  text-align: center;
`;

export const Inputs = styled.section`
  width: 100%;
  display: grid;
  grid-auto-flow: rows;
  gap: 1.5rem;
`;
export const InputWrapper = styled.section`
  display: grid;
  grid-template-rows: auto auto;
  row-gap: 1rem;
`;
export const Label = styled.label`
  color: black;
  font-size: 1.6rem;
`;
export const Input = styled.input`
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
  font: inherit;
  font-weight: 400;
  font-size: 2rem;
  color: black;
`;
export const Submit = styled.input`
  border: none;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 3px 5px 5px rgba(#07b123, 0.5);
  background-color: ${({ theme }) => theme.colors.green};
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => darken(0.05, theme.colors.green)};
  }
`;
export const Meta = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const MetaItem = styled(Link)`
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: ${({ theme }) => theme.colors.greyBlue};
  }
`;
export const Error = styled.p`
  color: ${({ theme }) => theme.error};
`;
export const Warning = styled.p``;
export const Success = styled.p``;
