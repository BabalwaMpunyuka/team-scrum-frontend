import SignUpImg from "../../images/changePassword.png";
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
import {useHistory } from "react-router-dom";
import useQuery from "../../hooks/useQuery";

const initial_state={
  showPassword:false,
  showConfirmPassword:false,
}

export const ChangePassword = () => {
  const { messages, propagateMessage } = useContextGetter();
  const [state,setState] = useState(initial_state);
  let query = useQuery();
  const history=useHistory();

  const validate = Yup.object().shape({
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

 
  const handleChangePassword = async (values, { setSubmitting }) => {
    try {
      if(!query.get("userId") || !query.get("token")){
        return propagateMessage({
          content: "Unauthorized",
          title: "Error",
          type: "danger",
          timeout: 5000,
        });
      }

      const data={
        id: query.get("userId"),
        password: values.password,
        token: query.get("token")
      }
      const res = await API.put(`/api/v1/Authentication/resetPassword`, data);
      
      if (res.data.success) {
        propagateMessage({
          content: "Password changed successfully!",
          title: "Password changed",
          type: "success",
          timeout: 5000,
        });
        setTimeout(()=>{history.replace("/login")},1000)
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
              alt="Change Password"
              className={`img-fluid ${styles.sign_up_img}`}
            />
          </div>

          <div className={`col-md-6 ${styles.sign_up_form_wrapper}`}>
            <h1> Change Password </h1>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validate}
              onSubmit={handleChangePassword}
            >
              {({ handleSubmit, isSubmitting }) => (
                <div >
                  <form onSubmit={handleSubmit} className={`${styles.sign_up_form}`}>
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
                  
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
