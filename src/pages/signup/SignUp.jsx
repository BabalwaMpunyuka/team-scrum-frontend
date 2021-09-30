import SignUpImg from "../../images/sign-up-img.PNG";
import { Formik } from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { useState } from "react";
import { TextField } from "../../components/form/text/TextField";
import styles from "./SignUp.module.css";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import BackToHome from "../../components/Navigation/backToHome/backToHome";
import { Link,useHistory } from "react-router-dom";
import EmailVerificationAlert from "../../components/message/alert/EmailVerificationAlert";

const initial_state={
  showPassword:false,
  showConfirmPassword:false,
  showEmailVerificationAlert: false,
  emailVerificationAlertMessage: `A verification link was sent to your email. Check
  your email and click on the link to get started`,
  user:{
    email:""
  }
}
export const SignUp = () => {
  const { messages, propagateMessage } = useContextGetter();
  const [state,setState] = useState(initial_state);
  const history=useHistory();
  const validate = Yup.object().shape({
    firstName: Yup.string()
      .max(15, "Must be 15 characers or less")
      .required("First name is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characers or less")
      .required(" Last name is required"),
    email: Yup.string()
      .email(" Please enter a valid email address ")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please provide a strong password"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Please confirm your password"),
  });

  const setStateValue=(field,value)=>{
      setState(prevState=>({
        ...prevState,
        [field]:value
      }))
  }
  const showConfirmPassword=()=>{
    setStateValue("showConfirmPassword",!state.showConfirmPassword);
  }

  const showPassword=()=>{
    setStateValue("showPassword",!state.showPassword);
  }

  const resendEmailVerificationLink=async()=>{
    try {
      const res = await API.post(`/api/v1/Authentication/emailVerification?email=${state.user.email}`);
      if (res.data.success) {
        setStateValue("emailVerificationAlertMessage",`A new verification link was sent to your email ${state.user.email}. 
        Check your email and click on the link to get started`)
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
    }
  }

  const handleSignup = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await API.post(`/api/v1/Authentication/signup`, values);
      
      if (res.data.success) {
        setState(prevState=>({
          ...prevState,
          user: res.data.data,
          showEmailVerificationAlert:true
        }));
        setTimeout(()=>{history.replace("/login")},15000)
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
      <div className={`container ${styles.sign_up_wrapper}`}>
        {state.showEmailVerificationAlert && <EmailVerificationAlert 
        resendEmailVerificationLink={resendEmailVerificationLink}
        message={state.emailVerificationAlertMessage} />}
        <div className="row">
          <div className="col-md-6">
            <img
              src={SignUpImg}
              alt="Sign Up"
              className={`img-fluid ${styles.sign_up_img}`}
            />
          </div>

          <div className={`col-md-6 ${styles.sign_up_form_wrapper}`}>
            <h1> Sign Up </h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validate}
              onSubmit={handleSignup}
            >
              {({ handleSubmit, isSubmitting }) => (
                <div >
                  <form onSubmit={handleSubmit} className={`${styles.sign_up_form}`}>
                  <TextField
                        label="First name"
                        name="firstName"
                        type="text"
                        placeholder="First name"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas","user"]}
                      />
                      <TextField
                        label="Surname"
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas","user"]}
                      />
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas","envelope"]}
                      />
                      <TextField
                        label="Password"
                        name="password"
                        type={state.showPassword?"text":"password"}
                        placeholder="Password"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas",state.showPassword?"eye-slash":"eye"]}
                        iconClick={showPassword}
                      />
                    
                      <TextField
                        label="Confirm password"
                        name="confirmPassword"
                        type={state.showConfirmPassword?"text":"password"}
                        placeholder="Confirm Password"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas",state.showConfirmPassword?"eye-slash":"eye"]}
                        iconClick={showConfirmPassword}
                      />
                    
                    <button
                      className={`${styles.btn} ${styles.form_input_btn}`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? (
                        "Submit"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
                    </button>
                  </form>
                  <p className={styles.signup_text}>
                    By signing up you agree to ITIAA <br />{" "}
                    <span>
                      <a href="/"> Terms of Use </a> and{" "}
                    </span>{" "}
                    <span>
                      <a href="/"> Policies </a>
                    </span>{" "}
                  </p>
                  <p className={styles.signup_text_two}>
                    Have an account?{" "}
                    <span>
                      <Link to="/login"> Login </Link>
                    </span>
                  </p>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
