import { Icon } from "@iconify/react";
import styles from "./report.module.css";
import { useEffect, useState } from "react";
// import useContextGetter from "../../hooks/useContextGetter";
// import { Spinner } from "react-bootstrap";
// import { formatErrors } from "../../utils/error.utils";
import API from "../../utils/BackendApi";
import { Link } from "react-router-dom";

const initialstate = {
  businessRequests: [],
  latestReport: null,
};

function Report() {
  const [state, setState] = useState(initialstate);

  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/BusinessRequest/my/business-requests`);
      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          businessRequests: res.data.data.$values,
          latestReport: getLatestBusinessReports(res.data.data.$values),
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

  const getLatestBusinessReports = (businessRequests) => {
    for (let i = businessRequests.length - 1; i >= 0; i--) {
      const reports = businessRequests[i].businessRequestReports.$values;
      if (!reports.length) {
        continue;
      }
      for (let j = reports.length; i >= 0; i--) {
        return reports[j];
      }
    }
    return null;
  };

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
        <h1>Reports</h1>
      </div>
      {state.latestReport ? (
        <div className={`mt-4 pt-4 px-3 ${styles.section_report}`}>
          <div className="row mb-2">
            <div className="col-sm-2">
              <span>Name</span>
            </div>
            <div className="col-sm-10">
              <span></span>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <span>Type</span>
            </div>
            <div className="col-sm-10">
              <span>
                PDF
                <Icon
                  icon="majesticons:file-report-line"
                  className="text-primary"
                />
              </span>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-2">
              <span>Id</span>
            </div>
            <div className="col-sm-4">
              <span>HyJIhFPaoYHMgXuVylG7Y1</span>
            </div>
            <div className="col-sm-4">
              <span>&nbsp;</span>
            </div>
            <div className="col-sm-2">
              <Icon icon="typcn:download" id={styles.icon_file} />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-sm-4">
              <span id={styles.date_posted}>Date posted: 2days ago </span>
            </div>
            <div className="col-sm-8">
              <span></span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`mt-4 pt-4 px-3 ${styles.section_report}`}>
          <p>This is no report for you at the moment</p>
        </div>
      )}

      <div className="w-100 mt-4">
        <p className="text-right px-2">
          <small>
            See all report documents
            <Icon icon="typcn:download" id={styles.icon_file} />
          </small>
        </p>
        <hr />
      </div>
      <h3>Request History</h3>
      {state.businessRequests.length ? (
        <div className={`my-4 ${styles.report_history}`}>
          {state.businessRequests.map((businessRequest,index)=>{ return(
          <div className={`row my-2 ${styles.report_row}`} key={index}>
            <div className="col-sm-1">{++index}</div>
            <div className="col-sm-2">
              <span>{businessRequest.businessName}</span>
            </div>
            <div className="col-md-2">
              <span>{businessRequest.requestType}</span>
            </div>
            <div className="col-md-2">
            <span>
              <span>{businessRequest.requestStatus} </span>
              {businessRequest.requestStatus!=="pending" && <Link to={`/business-reports?businessRequestId=${businessRequest.id}`}><Icon
                  icon="majesticons:file-report-line"
                  className="text-primary"
                /></Link>}
              </span>
            </div>
            <div className="col-md-2">
              <span>{getDaysDiff(businessRequest.createdAt)} ago at {new Date(businessRequest.createdAt).toLocaleTimeString("UTC",{ hour: '2-digit', minute: '2-digit', hour12: true })} UTC </span>
            </div>
            <div className="col-sm-1">
              <Link to={`/business-request/edit?request_code=${businessRequest.id}`}><button
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

export default Report;
