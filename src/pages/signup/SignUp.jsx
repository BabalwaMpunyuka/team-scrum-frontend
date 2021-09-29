import SignUpImg from "../../images/sign-up-img.PNG";
import { Formik } from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { TextField } from "../../components/form/text/TextField";
import styles from "./SignUp.module.css";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import BackToHome from "../../components/Navigation/backToHome/backToHome";

export const SignUp = () => {
  const { messages, propagateMessage } = useContextGetter();
  const validate = Yup.object().shape({

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

  const handleSignup = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await API.post(`/api/v1/Authentication/signup`, values);
      if (res.data.success) {
        propagateMessage({
          content: "Signup successful, kindly proceed to login",
          title: "Signup successful",
          type: "success",
          timeout: 5000,
        });
        resetForm({});
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
                        type="password"
                        placeholder="Password"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas","eye"]}
                      />
                    
                      <TextField
                        label="Confirm password"
                        name="confirmPassword"
                        type="Password"
                        placeholder="Confirm Password"
                        className={`${styles.form_input_wrapper}`}
                        inputClassName={styles.form_input}
                        fontAwesomeIcon={["fas","eye"]}
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
                      <a href="www.google.com"> Terms of Use </a> and{" "}
                    </span>{" "}
                    <span>
                      <a href="www.google.com"> Policies </a>
                    </span>{" "}
                  </p>
                  <p className={styles.signup_text_two}>
                    Have an account?{" "}
                    <span>
                      <a href="www.google.com"> Login </a>{" "}
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
