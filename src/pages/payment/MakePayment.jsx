import { useEffect, useState } from "react";
import useContextGetter from "../../hooks/useContextGetter";
import API from "../../utils/BackendApi";
import Button from "../../components/form/button/Button";
import "./Payment.css";
import Flutterwave from "../../images/flutterwave.PNG";
import Paystack from "../../images/paystack.PNG";
import MasterCard from "../../images/mastercard.PNG";
import Visa from "../../images/visa.PNG";
import AmericanExpress from "../../images/americanExpress.PNG";
import PaymentSubscription from "../../components/payment/PaymentSubscription";
import useQuery from "../../hooks/useQuery";

const initialstate = {
  pricingPlan: {},
  businessRequest: {},
  totalCost: 0,
  amountPaid: 0,
  discount: 0,
  paymentMethod: "",
  paymentStatus: "",
  userId: "",
  paymentType: "",
  paymentId: "",
  subscribe: false,
};

const MakePayment = () => {
  const [state, setState] = useState(initialstate);
  const { propagateMessage, user } = useContextGetter();
  const query = useQuery();
  const request_code = query.get("request_code");

  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/BusinessRequest?id=${request_code}`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          businessRequest: res.data.data,
          userId: user ? user.id : "",
          paymentType: res.data.data ? res.data.data.requestType : "",
        }));
      }
    } catch (e) {
      //   console.log(e.response);
    }
  };

  const setTotalCost = () => {
    if (state.paymentType === "Appraisals") {
      setStateValue("totalCost", 200);
    }
    if (state.paymentType === "Diagnostics") {
      setStateValue("totalCost", 300);
    }
    if (state.paymentType === "Modelling") {
      setStateValue("totalCost", 300);
    }
  };
  const setTotalDiscount = () => {
    if (Object.values(state.pricingPlan).length) {
      setStateValue("discount", state.totalCost * 0.3);
    }
  };

  const toggleSubscribe = () => {
    setState((prevState) => ({
      ...prevState,
      subscribe: !state.subscribe,
      totalCost: !state.subscribe ? 20 : 0,
    }));
  };

  let pageLoaded = false;

  useEffect(() => {
    if (request_code && !state.requestType) {
      loadData();
    }
    setTotalCost();
    setTotalDiscount();
    // eslint-disable-next-line
    return (pageLoaded = true);
  }, [pageLoaded, state.requestType]);

  return (
    <div className="container-fluid payment">
      <h2 className="choose"> Complete Payment</h2>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-2">
          <div className="choose-option">
            <div className="choose-option-imgs">
              <img src={Flutterwave} alt="flutterwave" className="img-fluid" />
              <img src={Paystack} alt="paystack" className="img-fluid" />
              <img src={MasterCard} alt="Master Card" className="img-fluid" />
              <img src={Visa} alt="visa" className="img-fluid" />
              <img
                src={AmericanExpress}
                alt="American Express"
                className="img-fluid"
              />
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
            {state.paymentType && (
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
              name="payment-method"
              value="flutterwave"
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
              name="payment-method"
              value="paystack"
              checked
            />
            <label htmlFor="paystack ">
              <h3 className="choose-header">Paystack</h3>
              <p className="choose-text">Make payment with Paystack</p>
            </label>
            <img src={Paystack} alt="paystack" className="img-fluid" />
          </div>
          <div className="bank-card choose-option">
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
          </div>
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
            <Button type="submit" variant="primary">
              Make payment
            </Button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8  mx-4 my-2">
          <PaymentSubscription setPricingPlan={setStateValue} />
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default MakePayment;
