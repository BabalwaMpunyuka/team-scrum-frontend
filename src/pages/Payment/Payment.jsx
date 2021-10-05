import "./Payment.css";
import styles from "../../components/message/alert/alert.module.css";
import Button from "../../components/form/button/Button";
import { Link } from "react-router-dom";
import useContextGetter from "../../hooks/useContextGetter";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import useQuery from "../../hooks/useQuery";



function Payment() {
  return (
    <div className="container-fluid payment">
      <h2 className="payment-header"> Confirm Payment</h2>
      <div className={styles.alert_wrapper}>
      <div className={styles.alert}>
        <h2>Payment Successful!</h2>
        <p>
          Your payment was successful. ITIAA consults team will contact you in 48hrs.
        </p>
        <Link to="/dashboard"><Button type="button" variant="primary">
         Back to Dashboard
        </Button></Link>
      </div>
    </div>
    </div>
  );
}

export default Payment;
