import React from "react";

import Logo from "../common/Logo";
import {
  Inputs,
  InputWrapper,
  Label,
  Input,
  Submit,
  Error,
  Title,
  StyledForm,
  Wrapper,
} from "../../utils/forms";
import { Formik } from "formik";

export default function ResetPassword() {
  const onSubmit = (data) => console.log(data);
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
            </Inputs>
            <Submit type="submit" value="Get new password" />
          </StyledForm>
        )}
      </Formik>
    </Wrapper>
  );
}
