import {useState, useEffect} from "react";
import {Link, useHistory } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import LoginImg from "../../images/Login-img.PNG";
import { Formik } from "formik";
import * as Yup from "yup";
import useContextGetter from "../../hooks/useContextGetter";
import { TextField } from "../../components/form/text/TextField";
import SignUpStyles from "../signup/SignUp.module.css";
import  LoginStyles from"./Login.module.css";
import { Spinner } from "react-bootstrap";
import PopupList from "../../components/message/PopupList";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import BackToHome from "../../components/Navigation/backToHome/backToHome";
import EmailVerificationSuccessAlert from "../../components/message/alert/EmailVerificationSucessAlert";

const initial_state={
  showEmailVerificationAlert: false,
  emailVerificationAlertMessage: `Login to get started with ITIAA Consults`,
  emailVerificationAlertErrorMessage:`To verify your email, click the button below`
  
}
export const Login = () => {
  const { messages, propagateMessage,login } = useContextGetter();
  const [state,setState] = useState(initial_state);
  const [isChecked,setIsChecked] = useState(true);
  const [showPassword,setShowPassword] = useState(false);
  const history=useHistory();
  let query = useQuery();

  const validate = Yup.object().shape({
    email: Yup.string()
      .email(" Please enter a valid email address ")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Please provide a strong password"),
  });

  const setStateValue=(field,value)=>{
    setState(prevState=>({
      ...prevState,
      [field]:value
    }))
}
useEffect(()=>{
  if(query.get("valid")){
    setStateValue("showEmailVerificationAlert",true);
  }
  // eslint-disable-next-line
},[])
  const handleRememberMe=()=>{

  }

  const resendEmailVerificationLink=async()=>{
    try {
      if(!query.get("email")){
        // setStateValue("showEmailVerificationAlert",false);
        return propagateMessage({
          content: "Unable to send verification link, please contact support",
          title: "Error",
          type: "danger",
          timeout: 5000,
        });
      }
      const res = await API.post(`/api/v1/Authentication/emailVerification?email=${query.get("email")}`);
      if (res.data.success) {
        setStateValue("emailVerificationAlertErrorMessage",`A new verification link was sent to your email ${query.get("email")}. 
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

  const handleLogin = async (values, { setSubmitting }) => {
    try {
      const res = await API.post(`/api/v1/Authentication/login`, values);
      if (res.data.success) {
        login(res.data.data);
        propagateMessage({
          content: "Login successful",
          title: "You are logged in",
          type: "success",
          timeout: 3000,
        });
      }
      history.replace("/dashboard");
    } catch (e) {
      propagateMessage({
        content: formatErrors(e),
        title: "Error",
        type: "danger",
        timeout: 3000,
      });
    } finally {
      window.scrollTo(0, 0);
      setSubmitting(false);
    }
  };
  return (
    <div className="Login">
      <PopupList popups={messages} />
      <BackToHome />
      <div className={`container ${SignUpStyles.sign_up_wrapper}`}>
        {state.showEmailVerificationAlert && <EmailVerificationSuccessAlert
        resendEmailVerificationLink={resendEmailVerificationLink}
        message={query.get("valid")==="true"?state.emailVerificationAlertMessage:state.emailVerificationAlertErrorMessage}
        success={query.get("valid")==="true"?true:false}
        close={()=>{setStateValue("showEmailVerificationAlert",false)}}
        />}
        <div className="row">
          <div className="col-md-6">
          <img
              src={LoginImg}
              alt="Sign Up"
              className={`img-fluid ${SignUpStyles.sign_up_img}`}
            />    
          </div>

          <div className={`col-md-6 ${SignUpStyles.sign_up_form_wrapper}`}>
            <h1> Login </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={handleLogin}
            >
              {({ handleSubmit, isSubmitting }) => (
                <div >
                <form onSubmit={handleSubmit} className={`${SignUpStyles.sign_up_form}`}>
                   
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        className={`${SignUpStyles.form_input_wrapper}`}
                        inputClassName={SignUpStyles.form_input}
                        fontAwesomeIcon={["fas","envelope"]}
                      />
                      <TextField
                        label="Password"
                        name="password"
                        type={showPassword?"text":"password"}
                        placeholder="Password"
                        className={`${SignUpStyles.form_input_wrapper}`}
                        inputClassName={SignUpStyles.form_input}
                        fontAwesomeIcon={["fas",showPassword?"eye-slash":"eye"]}
                        iconClick={()=>{setShowPassword(!showPassword)}}
                      />

                    <button
                      className={`${SignUpStyles.btn} ${SignUpStyles.form_input_btn}`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? (
                        "Login"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
                    </button>

                    <p className={LoginStyles.have_an_acc}>
                      <Link to="/signup"> I do not have an account</Link>
                    </p>
                    <div className={`d-flex align-items-center justify-content-center ${LoginStyles.checkbox}`}>
                      <input
                        type="checkbox"
                        className={LoginStyles.remember_me}
                        id="remember-me"
                        name="remember-me"
                        onChange={handleRememberMe}
                        checked={isChecked?"checked":""}
                        onClick={()=>{setIsChecked(!isChecked)}}
                      />
                      <label htmlFor="remember-me"> Remember me next time</label>
                    </div>
                    <Link to="/auth/forgot-password" id={LoginStyles.forgotPassword}>Forgot Password? Click Here</Link>
                  </form>
                </div>
              )}
            </Formik>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
