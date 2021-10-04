import Button from "../../components/form/button/Button";
import "./Payment.css";
import Flutterwave from "../../images/flutterwave.PNG";
import Paystack from "../../images/paystack.PNG";
import MasterCard from "../../images/mastercard.PNG";
import Visa from "../../images/visa.PNG";
import AmericanExpress from "../../images/americanExpress.PNG";
import PaymentSubscription from "../../components/payment/PaymentSubscription";

function Payment() {
  return (
    <div className="container-fluid payment">
      <h2 className="payment-header"> Complete Payment</h2>
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
          <input
            type="checkbox"
            id="check"
            name="check"
            value="payment-terms-and-condition-checked"
          />
          <label htmlFor="check">
            {" "}
            Check our{" "}
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
    </div>
  );
}

export default Payment;
