import React from "react";
import styles from "./alert.module.css";
// import Button from "../../form/button/Button";

const ResetEmailSentAlert = ({close}) => {
  return (
    <div className={styles.alert_wrapper}>
      <div className={styles.alert}>
        <h2>Reset password link was sent successfully</h2>
        <p>
        A Reset password link was sent to your email use this link to continue.
        </p>
        {/* <Button type="button" variant="primary" onClick={close}>
          Close
        </Button> */}
      </div>
    </div>
  );
};

export default ResetEmailSentAlert;
