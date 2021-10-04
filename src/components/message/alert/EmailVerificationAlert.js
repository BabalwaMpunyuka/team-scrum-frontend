import React from "react";
import styles from "./alert.module.css";
import Button from "../../form/button/Button";

const EmailVerificationAlert = ({resendEmailVerificationLink, message}) => {
  return (
    <div className={styles.alert_wrapper}>
      <div className={styles.alert}>
        <h2>Sign Up Successful. Confirm Your Email!</h2>
        <p>
          {message}
        </p>
        <Button type="button" variant="primary" onClick={resendEmailVerificationLink}>
          Resend Email Confirmation Link
        </Button>
      </div>
    </div>
  );
};

export default EmailVerificationAlert;
