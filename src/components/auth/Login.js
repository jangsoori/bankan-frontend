import React from "react";
import Logo from "../common/Logo";
import Cookies from "js-cookie";
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
import { toast, ToastContainer } from "react-toastify";
import { Formik } from "formik";
import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login({ title, children, values }) {
  const history = useHistory();
  const onSubmit = (data) => {
    //If all good, proceed to creating user
    Axios.post(
      "/api/auth/authUser",
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
        toast.success("Successful login! Redirecting...");
        Cookies.get("token") && history.push("/");
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