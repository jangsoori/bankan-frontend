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
  Title,
  StyledForm,
  Wrapper,
} from "../../utils/forms";

import { Formik } from "formik";
import useAuth from "../../hooks/useAuth";

export default function Signup() {
  const { signup } = useAuth();

  const onSubmit = (data) => {
    if (data.password !== data.passwordCheck) {
      console.log("Password do not match.");
    } else {
      //If all good, proceed to creating user
      signup(data.email, data.password, data.passwordCheck, data.displayName);
    }
  };

  return (
    <Wrapper>
      <Logo />
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordCheck: "",
          displayName: "",
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

          if (values.password !== values.passwordCheck) {
            errors.passwordCheck = "Passwords do not match!";
          }
          if (values.password && !values.passwordCheck) {
            errors.passwordCheck = "Repeat your password!";
          }
          if (values.password.length < 5) {
            errors.password =
              "Please provide password that is actually somewhat good...";
          }
          //Handle display name
          if (!values.displayName) {
            errors.displayName = "Display name is required!";
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
            <Title>Register</Title>

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
              <InputWrapper>
                <Label>Repeat password</Label>
                <Input
                  type="password"
                  name="passwordCheck"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordCheck}
                />
                <Error>
                  {errors.passwordCheck &&
                    touched.passwordCheck &&
                    errors.passwordCheck}
                </Error>
              </InputWrapper>
              <InputWrapper>
                <Label>Display name</Label>
                <Input
                  type="text"
                  name="displayName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.displayName}
                />
                <Error>
                  {" "}
                  {errors.displayName &&
                    touched.displayName &&
                    errors.displayName}
                </Error>
              </InputWrapper>
            </Inputs>
            {isSubmitting ? (
              <Submit type="submit" value="Submitting..." />
            ) : (
              <Submit type="submit" value="Sign up!" />
            )}
            <Meta>
              <MetaItem to="/login">Already registered?</MetaItem>
            </Meta>
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
}
