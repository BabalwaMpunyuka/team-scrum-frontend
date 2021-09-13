import SignUpImg from "../../images/sign-up-img.PNG";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { TextField } from "../../components/form/text/TextField";
import styles from "./SignUp.module.css";
import ConditionalHeader from "../../components/Navigation/login-signup-nav/ConditionalHeader";
import Footer from "../../components/footer/Footer";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";

export const SignUp = () => {
  const { messages, propagateMessage } = useContextGetter();
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
      <ConditionalHeader />
      <PopupList popups={messages} />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <img
              src={SignUpImg}
              alt="Sign Up"
              className={`img-fluid ${styles.sign_up_img}`}
            />
          </div>

          <div className="col-md-5">
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
                <div className={`container ${styles.sign_up}`}>
                  <h1 className="my-2"> Sign Up </h1>
                  <Form onSubmit={handleSubmit}>
                    <div className={`${styles.form_group}`}>
                      <TextField
                        label="First Name"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className={`${styles.form_input}`}
                      />
                    </div>

                    <div className="form-group">
                      <TextField
                        label="Last Name"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className={`${styles.form_input}`}
                      />
                    </div>

                    <div className="form-group">
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`${styles.form_input}`}
                      />
                    </div>

                    <div className="form-group">
                      <TextField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        className={`${styles.form_input}`}
                      />
                    </div>

                    <div className="form-group">
                      <TextField
                        label="Confirm password"
                        name="confirmPassword"
                        type="Password"
                        placeholder="Confirm Password"
                        className={`${styles.form_input}`}
                      />
                    </div>
                    <button
                      className={`${styles.btn} btn-block mt-4 ${styles.form_input}`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? (
                        "Submit"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
                    </button>
                  </Form>

                  <p className={styles.signup_text}>
                    By signing up you agree to ITIAA <br />{" "}
                    <span>
                      <a href="www.google.com"> Terms of Use </a> and{" "}
                    </span>{" "}
                    <span>
                      <a href="www.google.com"> Policies </a>
                    </span>{" "}
                  </p>
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

export default SignUp;
