import { useState, useEffect } from "react";
import "./Payment.css";
import styles from "../../components/message/alert/alert.module.css";
import Button from "../../components/form/button/Button";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../utils/BackendApi";
import axios from "axios";
import useQuery from "../../hooks/useQuery";

let runCount=0;

function ConfirmFlutterPayment() {
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
  const [isError, setIsError] = useState(false);
  const { paymentAPI, paymentDetails } = JSON.parse(localStorage.getItem("payment") );
  const query=useQuery();
  const tx_ref=query.get("tx_ref");
  const transaction_id=query.get("transaction_id");

  useEffect(() => { 
     if(runCount===0){ setTimeout(()=>{verifyPayment()}, 10000);} 
     // eslint-disable-next-line
  },[]);

  const verifyPayment = async () => {
    try { 
      const res = await axios.get(
        `http://lextutor-001-site1.itempurl.com/api/v1/Payment/flutter-confirm?tx_ref=${tx_ref}&transaction_id=${transaction_id}`,
        {
          headers: {
            Accept: "*/*",
          },
        }
      );

      if (res.data.Data.PaymentStatus === "Processed") {
        const data1 = {
          userId: paymentDetails.userId,
          discount: paymentDetails.discount,
          paymentId: paymentAPI.paymentId,
          paymentMethod: paymentDetails.paymentMethod,
          paymentType: paymentDetails.paymentType,
          totalCost: paymentDetails.totalCost,
          amountPaid: paymentDetails.amountPaid,
          paymentStatus: "paid",
        };
        const data2 = {
          businessRequestId: paymentDetails.businessRequestId,
          businessMobileNumber: null,
          businessEmail: null,
          businessName: null,
          jobTitle: null,
          requestDetails: null,
          requestStatus: "Paid",
        };

        const data3 = {
            userId: paymentDetails.userId,
            amountPaid: paymentDetails.amountPaid,
        };
        
        const res = await Promise.all([
          API.post(`/api/v1/UserPayment`, data1),
          paymentDetails.paymentType==="Subscription"?API.post(`/api/v1/UserPricingPlan`, data3):API.patch(`/api/v1/BusinessRequest`, data2),
        ]);
        if (res.length) {
          setIsPaymentSuccessful(true);
        }
      } else {
        setIsError(true);
      }
    } catch (e) {
      setIsError(true);
    }finally{
        ++runCount;
    }
  };

 
  return (
    <div className="container-fluid payment">
      {isPaymentSuccessful ? (
        <div className={styles.alert_wrapper}>
          <div className={styles.alert}>
            <h2>Payment Successful!</h2>
            <p>
              Your payment was successful. ITIAA consults team will contact you
              in 48hrs.
            </p>
            <Link to="/dashboard">
              <Button type="button" variant="primary">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.alert_wrapper}>
          {!isError ? (
            <>
              <Spinner animation="grow" variant="primary" />
              <h2 className="payment-header"> Confirming Payment</h2>
            </>
          ) : (
            <div className={styles.alert}>
              <h2>Error!</h2>
              <p>
                An error accured while verifying payment. Try a different
                payment option.
              </p>
              <Link to="/payment/history">
                <Button type="button" variant="primary">
                  Back
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ConfirmFlutterPayment;
