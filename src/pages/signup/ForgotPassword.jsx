import { useState } from "react";
import {Link } from "react-router-dom";
import LoginImg from "../../images/Login-img.PNG";
import { Formik} from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { TextField } from "../../components/form/text/TextField";
import SignUpStyles from "../signup/SignUp.module.css";
import  LoginStyles from"../login/Login.module.css";
import BackToHome from "../../components/Navigation/backToHome/backToHome";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import Styles from './ForgotPassword.Module.css'
import ResetEmailSentAlert from "../../components/message/alert/ResetEmailSentAlert";

export const ForgotPassword = () => {
  const { messages, propagateMessage } = useContextGetter();
  const [showResetEmail, setShowResetEmail]=useState(false);
  const validate = Yup.object().shape({
    email: Yup.string()
      .email(" Please enter a valid email address ")
      .required("Email is required")
  });

  const handleForgotPassword = async (values, { setSubmitting }) => {
    try {
      const res = await API.get(`/api/v1/Authentication/forgotPassword?email=${values.email}`);
      if (res.data.success) {
        return setShowResetEmail(true);
      }
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
      <PopupList popups={messages} />
      <BackToHome />
      <div className={`container ${SignUpStyles.sign_up_wrapper}`}>
        <div className={SignUpStyles.forgot_password}>
          {showResetEmail && <ResetEmailSentAlert close={()=>{setShowResetEmail(false)}}/>}
        <div className="row">
          <div className="col-md-6">
            <img
              src={LoginImg}
              alt="Sign Up"
              className={`img-fluid ${SignUpStyles.sign_up_img}`}
            />
          </div>

          <div className={`col-md-6 ${SignUpStyles.sign_up_form_wrapper}`}>
            <h1> Forgot Password? </h1>
            <p className={Styles.forgot_password_p}>Enter email address linked to your account to reset password</p>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={handleForgotPassword}
            >
              {({ handleSubmit, isSubmitting }) => (
                <div >
                <form onSubmit={handleSubmit} className={`${SignUpStyles.sign_up_form}`}>
                   
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="email"
                        className={`${SignUpStyles.form_input_wrapper}`}
                        inputClassName={SignUpStyles.form_input}
                        fontAwesomeIcon={["fas","envelope"]}
                      />
                    
                    <button
                      className={`${SignUpStyles.btn} ${SignUpStyles.form_input_btn}`}
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
                    </form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
