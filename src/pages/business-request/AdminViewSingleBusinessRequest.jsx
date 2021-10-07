import { useEffect, useState } from "react";
// import useContextGetter from "../../hooks/useContextGetter";
import styles from "./businessRequest.module.css";
import API from "../../utils/BackendApi";
import useQuery from "../../hooks/useQuery";
import { Icon } from "@iconify/react";
// import { Formik, Field } from "formik";
// import { TextField } from "../../components/form/text/TextField";
// import * as Yup from "yup";
// import { Spinner } from "react-bootstrap";
// import { formatErrors } from "../../utils/error.utils";
// import { Link } from "react-router-dom";
// import ModalMessage from "../../components/message/ModalMessage";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import UploadBusinessRequest from "../../components/business-request/UploadBusinessRequestFile";


const initialstate = {
  showEditForm: false,
  showFinalPrompt: false,
  filename: "",
  fileDescription: "",
  requestFormFileName: "",
  requestFormFile: null,
  isSubmitting: false,
  businessRequest:{}
};

const AdminViewSingleBusinessRequest = () => {
  const [state, setState] = useState(initialstate);
//   const { propagateMessage } =
//     useContextGetter();
  // const history = useHistory();
  let query = useQuery();

  const loadData = async () => {
    try {
      const res = await API.get(
        `/api/v1/BusinessRequest?id=${query.get("request_code")}`
      );

      if (res.data.success) {
        setState((prevState) => ({
            ...prevState,
            businessRequest: res.data.data,
          }));
      }
    } catch (e) {}
  };

  let dataLoaded = false;

  useEffect(() => {
   
    loadData();
    // eslint-disable-next-line
    return (dataLoaded = true);
    //eslint-disable-next-line
  }, [dataLoaded]);

  
  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.content_wrapper}>
            <h2>Business Request Details</h2>
            <span className={styles.prompt}>
              You can view and upload a business report here.
            </span>
            <button className=" ml-2 btn btn-outline-primary">Upload business report</button>
            <hr />
              <div className="row">
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Name of business:</span>
                  <span className={styles.field_text}>
                    {state.businessRequest.businessName}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Request Type:</span>
                  <span className={styles.field_text}>
                    {state.businessRequest.requestType}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Job Title:</span>
                  <span className={styles.field_text}>
                    {state.businessRequest.jobTitle}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Business Email:</span>
                  <span className={styles.field_text}>
                    {state.businessRequest.businessEmail}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Business Mobile Number:</span>
                  <span className={styles.field_text}>
                    {state.businessRequest.businessMobileNumber}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
                  <span className={styles.prompt}>
                    Business request details:
                  </span>
                  <span className={styles.field_text}>
                    {state.businessRequest.requestDetails}
                  </span>
                </div>
                {state.businessRequest &&
                  state.businessRequest.requestStatus === "Pending" && (
                    <div>
                      <button
                        className={`btn btn-sm btn-outline-primary ${styles.request_btn}`}
                        type="button"
                        onClick={() => {
                          setStateValue("showEditForm", !state.showEditForm);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  )}
              </div>
          </div>
        </div>
        {Object.values(state.businessRequest).length && (
          <div className="col-md-12">
            <div className={styles.content_wrapper}>
              {state.businessRequest.businessRequestFiles.$values.map(
                (businessFile, index) => {
                  return (
                    <div className={styles.file_details_wrapper} key={index}>
                      <Icon
                        icon="majesticons:file-report-line"
                        className={styles.file_icon}
                      />
                      <span className={styles.file_details}>
                        <span>
                          {businessFile.filename}:{businessFile.fileDescription}{" "}
                          <a href={businessFile.fileUrl} download>
                            <em>Download</em>
                          </a>
                        </span>
                        <p className={styles.line}>&nbsp;</p>
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminViewSingleBusinessRequest;
