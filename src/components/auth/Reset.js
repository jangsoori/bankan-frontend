import styled from "@emotion/styled";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Logo from "../common/Logo";
import {
  Inputs,
  InputWrapper,
  Label,
  Input,
  Submit,
  Meta,
  MetaItem,
  Error,
  Warning,
  Success,
  Title,
  StyledForm,
  Wrapper,
} from "../../utils/forms";

export default function Signup({ title, children, values }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Wrapper>
      <Logo />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Reset password</Title>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="resetemail">Email</Label>
            <Input name="resetemail" id="resetemail" ref={register} />
          </InputWrapper>
        </Inputs>
        <Submit type="submit" value="Reset password" />
        <Meta>
          <MetaItem to="/login">Log in</MetaItem>
        </Meta>
      </StyledForm>
    </Wrapper>
  );
}
