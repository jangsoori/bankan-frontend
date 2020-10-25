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

export default function Login({ title, children, values }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Wrapper>
      <Logo />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="login_email">Email</Label>
            <Input name="login_email" id="login_email" ref={register} />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="login_password">Password</Label>
            <Input
              name="login_password"
              id="login_password"
              type="password"
              ref={register}
            />
          </InputWrapper>
        </Inputs>
        <Submit type="submit" value="Go in!" />
        <Meta>
          <MetaItem to="/forgot-password">Forgot password?</MetaItem>
          <MetaItem to="/signup">Don't have an account? Sign up</MetaItem>
        </Meta>
      </StyledForm>
    </Wrapper>
  );
}
