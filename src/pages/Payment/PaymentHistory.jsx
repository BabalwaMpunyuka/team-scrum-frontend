import React from "react";
import PaymentSubscription from "../../components/payment/PaymentSubscription";
import { useEffect, useState } from "react";
import API from "../../utils/BackendApi";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialstate = {
  myPayments: [],
};
const PaymentHistory = () => {
  const [state, setState] = useState(initialstate);
  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/UserPayment/my/payments`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          myPayments: res.data.data.$values,
        }));
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  let pageLoaded = false;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
    return (pageLoaded = true);
  }, [pageLoaded]);

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

      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-4">
          <h2>Payment History</h2>
          {state.myPayments.length ? (
            <>
              {state.myPayments.map((myPayments, index) => {
                return (
                  <div className={`row choose-option`} key={index}>
                    <div className="col-md-2 mr-1">
                      <span>{myPayments.paymentType}</span>
                    </div>
                    <div className="col-md-1 mr-1">
                      <span>{myPayments.paymentMethod}</span>
                    </div>
                    <div className="col-md-1 mr-1">
                      <span>
                        <span>{myPayments.paymentStatus} </span>
                        {myPayments.paymentStatus !== "Paid" ? (
                          <span className="text-success">
                            <FontAwesomeIcon icon={["fas", "check-circle"]} />
                          </span>
                        ) : (
                          <span className="text-danger">
                            <FontAwesomeIcon icon={["fas", "times-circle"]} />
                          </span>
                        )}
                      </span>
                    </div>
                    <div className="col-md-2 mr-1">
                      <span>
                        
                        {myPayments.discount.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>
                    <div className="col-md-2 mr-1">
                      <span>
                        
                        {myPayments.amountPaid.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </span>
                    </div>
                    <div className="col-md-2">
                      <span>
                        {" "}
                        {new Date(myPayments.createdAt).toLocaleDateString(
                          "UTC",
                          { hour: "2-digit", minute: "2-digit", hour12: true }
                        )}{" "}
                        utc{" "}
                      </span>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="paystack choose-option">
              <p>
                You are yet to make a business request.{" "}
                <Link to="/payment/makePayment">Start with basic plan</Link>
              </p>
            </div>
          )}
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default PaymentHistory;
