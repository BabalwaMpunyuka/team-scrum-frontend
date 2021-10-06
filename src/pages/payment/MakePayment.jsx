import { useEffect, useState } from "react";
import useContextGetter from "../../hooks/useContextGetter";
import API from "../../utils/BackendApi";
import axios from "axios";
import { Spinner } from "react-bootstrap";
import "./Payment.css";
import Flutterwave from "../../images/flutterwave.PNG";
import Paystack from "../../images/paystack.PNG";
import { formatErrors } from "../../utils/error.utils";
// import { useHistory } from "react-router-dom";
// import MasterCard from "../../images/mastercard.PNG";
// import Visa from "../../images/visa.PNG";
// import AmericanExpress from "../../images/americanExpress.PNG";
import PaymentSubscription from "../../components/payment/PaymentSubscription";
import useQuery from "../../hooks/useQuery";

const initialstate = {
  pricingPlan: {},
  businessRequest: {},
  totalCost: 0,
  amountPaid: 0,
  discount: 0,
  paymentMethod: "paystack",
  paymentType: "",
  paymentId: "",
  subscribe: false,
  isSubmitting: false,
  pageLoaded:false,
};

const MakePayment = () => {
  const [state, setState] = useState(initialstate);
  const { propagateMessage, user } = useContextGetter();
  const query = useQuery();
  const request_code = query.get("request_code");
  //   const history = useHistory();

  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const loadData = async () => {
    try {
        if(!request_code) setStateValue("paymentType","Subscription")
      const res = await API.get(`/api/v1/BusinessRequest?id=${request_code}`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          businessRequest: res.data.data,
          paymentType: res.data.data
            ? res.data.data.requestType
            : "Subscription",
            pageLoaded:true,
        }));
      }  
    } catch (e) {
      //   console.log(e.response);
    }
  };

  const setTotalCost = () => {
      let totalCost=0;
      let discount=0;
    if (state.paymentType === "Appraisals") {
      totalCost=200;
    }
    if (state.paymentType === "Diagnostics") {
        totalCost=300;
    }
    if (state.paymentType === "Modelling") {
        totalCost=300;
    }
    if (Object.values(state.pricingPlan).length) {
        discount=totalCost*0.3;
    }
    setState((prevState) => ({
        ...prevState,
        totalCost,
        discount: discount
      }));
  };
 

  const toggleSubscribe = () => {
    setState((prevState) => ({
      ...prevState,
      subscribe: !state.subscribe,
      totalCost: !state.subscribe ? 20 : 0,
    }));
  };

  useEffect(() => {
    loadData();
    setTotalCost();

    // eslint-disable-next-line
  }, [state.pageLoaded]);

  const paystackPayment = async () => {
    try {
     setStateValue("isSubmitting", true);
      const data = {
        email: user ? user.email : "",
        callback_url: `http://localhost:3000/payment/confirm?id=${request_code}`,
        amount: state.totalCost - state.discount,
      };
      const paymentDetails = {
        discount: state.discount,
        email: user ? user.email : "",
        userId: user ? user.id : "",
        paymentMethod: "paystack",
        paymentType: state.paymentType,
        totalCost: state.totalCost,
        amountPaid: state.totalCost - state.discount,
        businessRequestId: request_code
      };
      const res = await axios.post(
        `http://lextutor-001-site1.itempurl.com/api/v1/Payment/paystack`,
        data,
        {
          headers: {
            Accept: "*/*",
          },
        }
      );

      if (res.data.IsSuccess) {
        localStorage.setItem(
          "payment",
          JSON.stringify({
            paymentAPI: res.data.Data,
            paymentDetails: paymentDetails,
          })
        );
        return (window.location.href = res.data.Data.AuthorizationUrl);
      } else {
        propagateMessage({
          content: "Unable to complete payement, please try again",
          title: "Error",
          type: "danger",
          timeout: 5000,
        });
      }
    } catch (e) {
      propagateMessage({
        content: "An error occured, please try again",
        title: "Error",
        type: "danger",
        timeout: 5000,
      });
    } finally {
      window.scrollTo(0, 0);
      setStateValue("isSubmitting", false);
    }
  };

  const flutterwavePayment = async () => {
    try {
      const data = {};
      const res = await API.patch(`/api/v1/BusinessRequest`, data);

      if (res.data.success) {
        propagateMessage({
          content:
            "Business request submitted. You will be redirected to make payment shortly.",
          title: "Success",
          type: "success",
          timeout: 3000,
        });
      }
    } catch (e) {
      // console.log(e.response);
      propagateMessage({
        content: formatErrors(e),
        title: "Error",
        type: "danger",
        timeout: 5000,
      });
    } finally {
      window.scrollTo(0, 0);
      setStateValue("showFinalPrompt", false);
    }
  };

  const handlePayment = () => {
    
    if (state.totalCost && state.paymentMethod === "paystack") return paystackPayment();
    if (state.totalCost && state.paymentMethod === "flutterwave") return flutterwavePayment();
    
    window.scrollTo(0, 0);
    
    return propagateMessage({
      content: "There must be an amount to pay and a payment method",
      title: "Error",
      type: "danger",
      timeout: 5000,
    });
  };

  return (
    <div className="container-fluid payment">
      <h2 className="choose"> Complete Payment</h2>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-2">
          <PaymentSubscription setPricingPlan={setStateValue} />
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-2">
          <div className="choose-option">
            <div className="choose-option-imgs">
              <img src={Flutterwave} alt="flutterwave" className="img-fluid" />
              <img src={Paystack} alt="paystack" className="img-fluid" />
              {/* <img src={MasterCard} alt="Master Card" className="img-fluid" />
              <img src={Visa} alt="visa" className="img-fluid" />
              <img
                src={AmericanExpress}
                alt="American Express"
                className="img-fluid"
              /> */}
            </div>
            {!Object.values(state.pricingPlan).length && !request_code ? (
              <>
                <label className="mt-2">I will like to subscribe</label>
                <br />
                <input
                  type="radio"
                  id="subscribe"
                  name="subscribe"
                  value="20"
                  checked={state.subscribe}
                  onClick={toggleSubscribe}
                />
              </>
            ) : (
              ""
            )}
            <h3 className="payment-total choose-header">
              Total Cost: ${state.totalCost}
            </h3>
            {state.paymentType !== "Subscription" && (
              <>
                <p className="payment-total choose-text">
                  {Object.values(state.pricingPlan).length
                    ? `You have a discount of $${state.discount}`
                    : `Become a member to enjoy free discount`}
                </p>
                <h3 className="payment-total choose-header">Amount to pay</h3>
                <p className="payment-total choose-text">
                  <strong>${state.totalCost - state.discount}</strong>
                </p>
              </>
            )}
          </div>
          <h2 className="choose">Choose payment method</h2>
          <div className="flutterwave choose-option">
            <input
              type="radio"
              id="flutter-wave input"
              name="paymentMethod"
              value="flutterwave"
              onChange={(e) => {
                setStateValue(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="flutter-wave">
              <h3 className="choose-header">Flutterwave</h3>
              <p className="choose-text">Make payment with Flutterwave</p>
            </label>
            <img src={Flutterwave} alt="flutterwave" className="img-fluid" />
          </div>
          <div className="paystack choose-option">
            <input
              type="radio"
              id="paystack input"
              name="paymentMethod"
              value="paystack"
              onChange={(e) => {
                setStateValue(e.target.name, e.target.value);
              }}
            />
            <label htmlFor="paystack ">
              <h3 className="choose-header">Paystack</h3>
              <p className="choose-text">Make payment with Paystack</p>
            </label>
            <img src={Paystack} alt="paystack" className="img-fluid" />
          </div>
          {/* <div className="bank-card choose-option">
            <input
              type="radio"
              id="bank-card input"
              name="payment-method"
              value="bank-card"
            />
            <label htmlFor="bank-card ">
              <h3 className="choose-header">Bank card</h3>
              <p className="choose-text">
                Make payment with Visa, MasterCard, American Express
              </p>
            </label>
            <div className="choose-option-imgs">
              <img src={MasterCard} alt="Master Card" className="img-fluid" />
              <img src={Visa} alt="visa" className="img-fluid" />
              <img
                src={AmericanExpress}
                alt="American Express"
                className="img-fluid"
              />
            </div>
          </div> */}
          <div className="check-terms-and-conditions">
            {/* <input
            type="checkbox"
            id="check"
            name="check"
            value="payment-terms-and-condition-checked"
          /> */}
            <label htmlFor="check">
              By clicking make payment, you agree to our
              <span>
                {" "}
                <a href="www.google.com"> terms & conditions</a>
              </span>{" "}
              <span>
                {" "}
                and <a href="www.google.com"> private policy</a>
              </span>
            </label>
          </div>
          <div className="payment-btn-wrapper">
            <button
              className={`btn btn-sm btn-outline-primary`}
              type="buttom"
              onClick={handlePayment}
              disabled={state.isSubmitting}
            >
              {!state.isSubmitting ? (
                " Make payment"
              ) : (
                <Spinner animation="border" variant="primary" />
              )}
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default MakePayment;
