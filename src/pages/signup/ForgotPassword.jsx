import {Link, useHistory } from "react-router-dom";
import LoginImg from "../../images/Login-img.PNG";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { TextField } from "../../components/form/text/TextField";
import SignUpStyles from "../signup/SignUp.module.css";
import  LoginStyles from"../login/Login.module.css";
import ConditionalHeader from "../../components/Navigation/login-signup-nav/ConditionalHeader";
import Footer from "../../components/footer/Footer";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import Styles from './ForgotPassword.Module.css'

export const ForgotPassword = () => {
  const { messages, propagateMessage,login } = useContextGetter();
  const history=useHistory();
  const validate = Yup.object().shape({
    email: Yup.string()
      .email(" Please enter a valid email address ")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please provide a strong password"),
  });

  const handleForgotPassword = async (values, { setSubmitting }) => {
    try {
      const res = await API.post(`/api/v1/Authentication/login`, values);
      if (res.data.success) {
        login(res.data.data);
        propagateMessage({
          content: "Login successful",
          title: "You are logged in",
          type: "success",
          timeout: 5000,
        });
      }
      history.replace("/dashboard");
    } catch (e) {
      propagateMessage({
        content: formatErrors(e),
        title: "Error",
        type: "danger",
        timeout: 5000,
      });
    } finally {
      window.scrollTo(0, 0);
      setSubmitting(false);
    }
  };
  return (
    <div>
      <ConditionalHeader />
      <PopupList popups={messages} />
      <div className="container">
        <div className={Styles.forgot_password}>
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
              onSubmit={handleForgotPassword}
            >
              {({ handleSubmit, isSubmitting }) => (
                <div className={`container ${SignUpStyles.sign_up}`}>
                  <h1 className="my-4"> Forgot Password? </h1>
                  <p>Enter email address linked to your account to reset password</p>
                  <Form onSubmit={handleSubmit}>
                    <div className={`${SignUpStyles.form_group}`}>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className={`${SignUpStyles.form_input}`}
                      />
                    </div>
                    <button
                      className={`${SignUpStyles.btn} btn-block mt-4 ${SignUpStyles.form_input}`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? (
                        "Submit"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
                    </button>

                    <p className={LoginStyles.have_an_acc}>
                      <Link to="/signup"> Don’t have an account? sign up</Link>
                    </p>
                    </Form>
                </div>
              )}
            </Formik>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div id={Styles.mobile_view}>
      <Footer />
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
