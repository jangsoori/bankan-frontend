import React from "react";
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
import { Formik } from "formik";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Login({ title, children, values }) {
  const { login } = useAuth();

  const onSubmit = (data) => {
    login(data.email, data.password);
  };

  return (
    <Wrapper>
      <Logo />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};
          //Handle email input
          if (!values.email) {
            errors.email = "Email is required!";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address!";
          }

          //Handle passwords input

          if (!values.password) {
            errors.password = "Password is required!";
          }

          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <Title>Login</Title>
            <Inputs>
              <InputWrapper>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <Error>{errors.email && touched.email && errors.email}</Error>
              </InputWrapper>
              <InputWrapper>
                <Label>Password</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <Error>
                  {errors.password && touched.password && errors.password}
                </Error>
              </InputWrapper>
            </Inputs>
            {isSubmitting ? (
              <Submit type="submit" value="Loggin in..." />
            ) : (
              <Submit type="submit" value="Log in!" />
            )}
            <Meta>
              <MetaItem to="/signup">Need an account?</MetaItem>
              <MetaItem to="/reset-password">Forgot a password?</MetaItem>
            </Meta>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
}
