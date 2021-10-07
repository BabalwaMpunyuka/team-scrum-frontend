import { Icon } from "@iconify/react";
import styles from "../report/report.module.css";
import { useEffect, useState } from "react";
import API from "../../utils/BackendApi";
import { Link } from "react-router-dom";

const initialstate = {
  businessRequests: [],
};

function AdminViewBusinessRequest() {
  const [state, setState] = useState(initialstate);

  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/BusinessRequest/all`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          businessRequests: res.data.data.$values,
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


  const getDaysDiff=(date)=>{
    const Difference_In_Time = new Date().getTime() - new Date(date).getTime();
    const difference_in_days=Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    if(difference_in_days<2){
      return "1 day"
    }
    return `${difference_in_days} days`;
  }

  return (
    <div className={`container ${styles.report_wrapper}`}>
      <div className="mt-4 pt-4 px-3">
        <h1>Business Requests</h1>
      </div>
      {state.businessRequests.length ? (
        <div className={`my-4 ${styles.report_history}`}>
          {state.businessRequests.map((businessRequest,index)=>{ return(
          <div className={`row my-2 ${styles.report_row}`} key={index}>
            <div className="col-sm-1">{++index}</div>
            <div className="col-sm-2">
              <span>{businessRequest.businessName}</span>
              <br />
              {businessRequest.businessEmail}
              <br />
              {businessRequest.businessMobileNumber}
            </div>
            
            <div className="col-md-2">
              <span>{businessRequest.requestType}</span>
            </div>
            <div className="col-md-2">
            <span>
              <span>{businessRequest.requestStatus}</span>
              {businessRequest.requestStatus!=="paid" && <Link to={`/admin/business-request/single?request_code=${businessRequest.id}`}><Icon
                  icon="majesticons:file-report-line"
                  className="text-primary"
                /></Link>}
              </span>
            </div>
            <div className="col-md-2">
              <span>{getDaysDiff(businessRequest.createdAt)} ago at {new Date(businessRequest.createdAt).toLocaleTimeString("UTC",{ hour: '2-digit', minute: '2-digit', hour12: true })} UTC </span>
            </div>
            <div className="col-sm-1">
              <Link to={`/admin/business-request/single?request_code=${businessRequest.id}`}><button
                className={`btn btn-sm btn-primary`}
                type="button"
              >
                View
              </button></Link></div>
          </div>)})}
        </div>
      ) : (
        <div className={`mt-4 pt-4 px-3 ${styles.section_report}`}>
          <p>
            You are yet to make a business request.{" "}
            <Link to="/business-request/add">CLick here to start</Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default AdminViewBusinessRequest;
