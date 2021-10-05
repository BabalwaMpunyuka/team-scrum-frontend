import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/BackendApi";


const initialstate = {
  pricingPlan: {},
};

function PaymentSubscription({setPricingPlan}) {
  const [state, setState] = useState(initialstate);

  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/UserPricingPlan/my/pricing-plan`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          pricingPlan: res.data.data,
        }));

        setPricingPlan("pricingPlan",res.data.data);
      }
    } catch (e) {
    //   console.log(e.response);
    }
  };

  let pageLoaded = false;

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
    return (pageLoaded = true);
  }, [pageLoaded]);

  const getDaysDiff=(date)=>{
    const Difference_In_Time = new Date().getTime() - new Date(date).getTime();
    const difference_in_days=365-Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    if(difference_in_days<2){
      return "1 day"
    }
    return `${difference_in_days} days`;
  }

  return (<>
      {Object.values(state.pricingPlan).length ?
    <div className="payment-card">
      <h2 className="amount">$20</h2>
      <h3 className="payment-subheader"> annual subscription fee</h3>
      <p className="payment-text">
        Your basic plan membership fee for investment tips and financial health is active
      </p>
      <hr />
      <p className="payment-total payment-total-text">Total</p>
      <h3 className="payment-total payment-total-amount">$20</h3>
      <span className="payment-total">Expires: {getDaysDiff(state.pricingPlan.createdAt)}</span>
    </div>
    :<div className="payment-card">
    <h2 className="amount">$20</h2>
    <h3 className="payment-subheader"> annual subscription fee</h3>
    <p className="payment-text">
      A basic plan membership fee for investment tips and financial health
    </p>
    <hr />
    <p className="payment-total payment-total-text">Total</p>
    <h3 className="payment-total payment-total-amount">$20</h3>
    <Link to='/payment/makePayment' className="payment-total">Subscribe now</Link>
  </div>}</>
  );
}

export default PaymentSubscription;
