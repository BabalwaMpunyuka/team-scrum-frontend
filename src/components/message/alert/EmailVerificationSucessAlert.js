import React from "react";
import styles from "./alert.module.css";
import Button from "../../form/button/Button";

const EmailVerificationSuccessAlert = ({resendEmailVerificationLink, message,success,close}) => {
  return (
    <div className={styles.alert_wrapper}>
      <div className={styles.alert}>
        <h2>{success? "Email Verified!":"Email not Confirmed!"}</h2>
        <p>
          {message}
        </p>
        {!success? <Button type="button" variant="primary" onClick={resendEmailVerificationLink}>
          Resend Email Confirmation Link
        </Button>:<Button type="button" variant="primary" onClick={close}>
          Got it
        </Button>}
      </div>
    </div>
  );
};

export default EmailVerificationSuccessAlert;
