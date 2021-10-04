import React from "react";
import PaymentSubscription from "../../components/payment/PaymentSubscription";

const PaymentHistory = () => {
  return (
    <div className="container-fluid payment">
         <h2 className="payment-header">Plans and Payment</h2>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-4">
          <PaymentSubscription />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default PaymentHistory;
