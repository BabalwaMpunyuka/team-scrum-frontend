import React from "react";
import LoginImg from "../../images/Login-img.PNG";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField } from "../../components/form/text/TextField";
import SignUpStyles from "../signup/SignUp.module.css";
import  LoginStyles from"./Login.module.css";
import ConditionalHeader from "../../components/Navigation/login-signup-nav/ConditionalHeader";
import Footer from "../../components/footer/Footer";

export const Login = () => {
  const validate = Yup.object().shape({
    email: Yup.string()
      .email(" Please enter a valid email address ")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please provide a strong password"),
  });
  return (
    <div>
      <ConditionalHeader />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img
              src={LoginImg}
              alt="Sign Up"
              className={`img-fluid ${SignUpStyles.sign_up_img}`}
            />
          </div>

          <div className="col-md-5">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
            >
              {(formik) => (
                <div className={`container ${SignUpStyles.sign_up}`}>
                  <h1 className="my-4"> Log In </h1>
                  <Form>
                    <div className={`${SignUpStyles.form_group}`}>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className={`${SignUpStyles.form_input}`}
                      />
                      <ErrorMessage name="name" />
                    </div>

                    <div className={`${SignUpStyles.form_group}`}>
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={`${SignUpStyles.form_input}`}
                      />
                      <ErrorMessage name="name" />
                    </div>

                    <button
                      className={`${SignUpStyles.btn} btn-block mt-4 ${SignUpStyles.form_input}`}
                      type="submit"
                    >
                      {" "}
                      Submit
                    </button>

                    <p className={LoginStyles.have_an_acc}>
                      <a href="#signup"> I do not have an account</a>{" "}
                    </p>
                    <div className={`d-flex align-items-center justify-content-center ${LoginStyles.checkbox}`}>
                      <input
                        type="checkbox"
                        id="remember-me"
                        name="remember-me"
                        checked
                      />
                      <label for="remember-me"> Remember me next time</label>
                    </div>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
