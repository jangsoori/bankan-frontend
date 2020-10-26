import styled from "@emotion/styled";
import React, { useState } from "react";
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
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, useFormik } from "formik";

export default function Signup() {
  const onSubmit = (data) => {
    console.log(data);
    if (data.password !== data.repeat_password) {
      console.log("this dont maczz");
    }
    //If all good, proceed to creating user
    Axios.post(
      "/api/auth/createUser",
      {
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    )
      .then((res) => {
        toast.success("Account created successfully! You can now log in.");
      })
      .catch((e) => {
        toast.error(e.response.data.msg);
      });
  };

  return (
    <Wrapper>
      <Logo />
      <Formik
        initialValues={{
          email: "",
          password: "",
          repeat_password: "",
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

          if (values.password !== values.repeat_password) {
            errors.repeat_password = "Passwords do not match!";
          }
          if (values.password && !values.repeat_password) {
            errors.repeat_password = "Repeat your password!";
          }
          if (values.password.length < 6) {
            errors.password =
              "Please provide password that is actually somewhat good...";
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
                  name="repeat_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeat_password}
                />
                <Error>
                  {errors.repeat_password &&
                    touched.repeat_password &&
                    errors.repeat_password}
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Wrapper>
  );
}
