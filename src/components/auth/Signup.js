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
        <Title>Sign up</Title>
        <Inputs>
          <InputWrapper>
            <Label htmlFor="sign_up_email">Email</Label>
            <Input name="sign_up_email" id="sign_up_email" ref={register} />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="sign_up_password">Password</Label>
            <Input
              name="sign_up_password"
              id="sign_up_password"
              type="password"
              ref={register}
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="sign_up_repeat_password">Password</Label>
            <Input
              name="sign_up_repeat_password"
              id="sign_up_repeat_password"
              type="password"
              ref={register}
            />
          </InputWrapper>
        </Inputs>
        <Submit type="submit" value="Create an account" />
        <Meta>
          <MetaItem to="/login">Already have an account? Log in</MetaItem>
        </Meta>
      </StyledForm>
    </Wrapper>
  );
}
