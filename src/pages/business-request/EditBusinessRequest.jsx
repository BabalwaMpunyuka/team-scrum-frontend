import { useEffect, useState } from "react";
import useContextGetter from "../../hooks/useContextGetter";
import styles from "./businessRequest.module.css";
import { Formik, Field } from "formik";
import { TextField } from "../../components/form/text/TextField";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import { Link } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import ModalMessage from "../../components/message/ModalMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadBusinessRequest from "../../components/business-request/UploadBusinessRequestFile";
import { Icon } from "@iconify/react";
import downloadFile from "../../utils/FileDownload.utils";

const initialstate = {
  showEditForm: false,
  showFinalPrompt: false,
  filename: "",
  fileDescription: "",
  requestFormFileName: "",
  requestFormFile: null,
  isSubmitting: false,
};

const EditBusinessRequest = () => {
  const [state, setState] = useState(initialstate);
  const { propagateMessage, businessRequest, addBusinessRequest } =
    useContextGetter();
  // const history = useHistory();
  let query = useQuery();

  const initialValues = {
    requestType: businessRequest.requestType ? businessRequest.requestType : "",
    businessEmail: businessRequest.businessEmail
      ? businessRequest.businessEmail
      : "",
    businessMobileNumber: businessRequest.businessMobileNumber
      ? businessRequest.businessMobileNumber
      : "",
    businessName: businessRequest.businessName
      ? businessRequest.businessName
      : "",
    requestDetails: businessRequest.requestDetails
      ? businessRequest.requestDetails
      : "",
    jobTitle: businessRequest.jobTitle ? businessRequest.jobTitle : "",
  };

  const loadData = async () => {
    try {
      const res = await API.get(
        `/api/v1/BusinessRequest?id=${query.get("request_code")}`
      );

      if (res.data.success) {
        addBusinessRequest(res.data.data);
      }
    } catch (e) {}
  };

  let dataLoaded = false;

  useEffect(() => {
    //if (!Object.values(businessRequest).length) {
    loadData();
    //}
    // eslint-disable-next-line
    return (dataLoaded = true);
    //eslint-disable-next-line
  }, [dataLoaded]);

  const validate = Yup.object().shape({
    requestType: Yup.string().required("Request type is required"),
    requestDetails: Yup.string()
      .min(200, "Request details must be more than 200 characters")
      .required("Enter deatils of your request."),
    businessName: Yup.string()
      .min(3, "Business name must be more than 3 characters")
      .required(
        "Enter your business name. Use your name if you don't have a business"
      ),
    businessMobileNumber: Yup.string()
      .min(
        14,
        "Enter mobile phone number with country code. E.g +2347000000000"
      )
      .required(
        "Enter your business mobile number. Use your personal mobile number if you don't have a business"
      ),
    businessEmail: Yup.string()
      .email("Please enter a valid email address")
      .required("Business Email is required"),
    jobTitle: Yup.string()
      .min(3, "Job title must be more than 3 characters")
      .required("Job title is required"),
  });

  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleEditBusinessRequest = async (values, { setSubmitting }) => {
    try {
      const res = await API.patch(`/api/v1/BusinessRequest`, {
        businessRequestId: businessRequest.id,
        ...values,
      });

      if (res.data.success) {
        addBusinessRequest(res.data.data);
        propagateMessage({
          content: "Business request update. Next steps is making payment.",
          title: "Edit",
          type: "success",
          timeout: 3000,
        });
      }
      setState(initialstate);
    } catch (e) {
      propagateMessage({
        content: formatErrors(e),
        title: "Error",
        type: "danger",
        timeout: 5000,
      });
    } finally {
      window.scrollTo(0, 0);
      setSubmitting(false);
      setStateValue("showEditForm", false);
    }
  };

  const handleUpload = async () => {
    try {
      setStateValue("isSubmitting", true);
      const formData = new FormData();
      formData.append("businessRequestId", businessRequest.id);
      formData.append("filename", state.filename);
      formData.append("fileDescription", state.fileDescription);
      formData.append("requestFormFile", state.requestFormFile);
      const res = await API.post(`/api/v1/BusinessRequestFiles`, formData, {
        headers: {
          accept: "*/*",
          "content-type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      });
      if (res.data.success) {
        addBusinessRequest(res.data.data.businessRequest);
        propagateMessage({
          content: "Fileuploaded. Proceed to payment or upload more files.",
          title: "File uploaded!",
          type: "success",
          timeout: 3000,
        });
      }
    } catch (e) {
      propagateMessage({
        content: formatErrors(e),
        title: "Error",
        type: "danger",
        timeout: 5000,
      });
    } finally {
      window.scrollTo(0, 0);
      setStateValue("isSubmitting", false);
    }
  };
  const finalSubmission = async () => {
    try {
      const data = {
        businessRequestId: businessRequest.id,
        businessMobileNumber: businessRequest.businessMobileNumber,
        businessEmail: businessRequest.businessEmail,
        businessName: businessRequest.businessName,
        jobTitle: businessRequest.jobTitle,
        requestDetails: businessRequest.requestDetails,
        requestStatus: "Submitted",
        requestType: businessRequest.requestType,
      };
      const res = await API.patch(`/api/v1/BusinessRequest`, data);

      if (res.data.success) {
        addBusinessRequest(res.data.data);
        propagateMessage({
          content:
            "Business request submitted. You will be redirected to make payment shortly.",
          title: "Success",
          type: "success",
          timeout: 3000,
        });
        setTimeout(() => {
          window.location.href = `/payment/makePayment?request_code=${res.data.data.id}`;
        }, 1000);
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
  const handleShowPrompt = () => {
    if (businessRequest.businessRequestFiles.$values.length) {
      return setStateValue("showFinalPrompt", true);
    }
    window.scrollTo(0, 0);
    propagateMessage({
      content:
        "No file or supporting document has been uploaded for this request.",
      title: "Supporting documents",
      type: "danger",
      timeout: 5000,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.content_wrapper}>
            <h2>Business Request Details</h2>
            <span className={styles.prompt}>
              You can view and edit a business request details here. Note that
              after final submission, it can no longer be editted.
            </span>
            <hr />
            {state.showEditForm ? (
              <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                validationSchema={validate}
                onSubmit={handleEditBusinessRequest}
              >
                {({
                  handleSubmit,
                  errors,
                  isSubmitting,
                  handleChange,
                  values,
                }) => (
                  <div>
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className={`col-md-6 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Name of business
                          </label>
                          <TextField
                            label="business name"
                            name="businessName"
                            type="text"
                            placeholder="Business name"
                            onChange={handleChange}
                            value={values.businessName}
                            className={styles.field_wrapper}
                            inputClassName={styles.field}
                          />
                        </div>
                        <div className={`col-md-6 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Request Type
                          </label>
                          <Field
                            as="select"
                            name="requestType"
                            onChange={handleChange}
                            value={values.requestType}
                            className={`${styles.field}`}
                          >
                            <option value="Appraisals">Appraisals</option>
                            <option value="Diagnostics">Diagnostics</option>
                            <option value="Modelling">Modelling</option>
                          </Field>
                        </div>
                        <div className={`col-md-6 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Job Title
                          </label>
                          <TextField
                            label="job title"
                            name="jobTitle"
                            type="text"
                            placeholder="JobTitle"
                            onChange={handleChange}
                            value={values.jobTitle}
                            className={styles.field_wrapper}
                            inputClassName={styles.field}
                          />
                        </div>
                        <div className={`col-md-6 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Business Email
                          </label>
                          <TextField
                            label="business email"
                            name="businessEmail"
                            type="email"
                            placeholder="Business email"
                            onChange={handleChange}
                            value={values.businessEmail}
                            className={styles.field_wrapper}
                            inputClassName={styles.field}
                          />
                        </div>
                        <div className={`col-sm-12 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Business Mobile Number
                          </label>
                          <TextField
                            label="business mobile number"
                            name="businessMobileNumber"
                            type="text"
                            placeholder="E.g +2347000000000"
                            onChange={handleChange}
                            value={values.businessMobileNumber}
                            className={styles.field_wrapper}
                            inputClassName={styles.field}
                          />
                        </div>
                        <div className={`col-sm-12 ${styles.field_wrapper}`}>
                          <label className={styles.field_label}>
                            Detailed request
                          </label>
                          <Field
                            as="textarea"
                            name="requestDetails"
                            onChange={handleChange}
                            value={values.requestDetails}
                            className={`${styles.field} ${styles.field_textarea}`}
                          ></Field>
                          <div className="text-danger">
                            <span>
                              {errors.requestDetails
                                ? errors.requestDetails
                                : ""}
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <button
                            className={`btn btn-sm btn-outline-primary ${styles.request_btn}`}
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {!isSubmitting ? (
                              "Submit"
                            ) : (
                              <Spinner animation="border" variant="primary" />
                            )}
                          </button>
                        </div>
                      </div>{" "}
                    </form>
                  </div>
                )}
              </Formik>
            ) : (
              <div className="row">
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Name of business:</span>
                  <span className={styles.field_text}>
                    {businessRequest.businessName}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Request Type:</span>
                  <span className={styles.field_text}>
                    {businessRequest.requestType}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Job Title:</span>
                  <span className={styles.field_text}>
                    {businessRequest.jobTitle}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Business Email:</span>
                  <span className={styles.field_text}>
                    {businessRequest.businessEmail}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.view_wrapper}`}>
                  <span className={styles.prompt}>Business Mobile Number:</span>
                  <span className={styles.field_text}>
                    {businessRequest.businessMobileNumber}
                  </span>
                </div>
                <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
                  <span className={styles.prompt}>
                    Business request details:
                  </span>
                  <span className={styles.field_text}>
                    {businessRequest.requestDetails}
                  </span>
                </div>
                {businessRequest &&
                  businessRequest.requestStatus === "Pending" && (
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
            )}
          </div>
        </div>
        {Object.values(businessRequest).length && (
          <div className="col-md-12">
            <div className={styles.content_wrapper}>
              {businessRequest.businessRequestFiles.$values.map(
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

        {businessRequest && businessRequest.requestStatus === "Pending" && (
          <div className="col-md-12">
            <UploadBusinessRequest
              isSubmitting={state.isSubmitting}
              filename={state.filename}
              fileDescription={state.fileDescription}
              requestFormFileName={state.requestFormFileName}
              requestFormFile={state.requestFormFile}
              setFormValue={setStateValue}
              handleUpload={handleUpload}
            />
            {businessRequest.requestStatus === "Pending" && (
              <div className={styles.button_wrapper}>
                <button
                  className={`btn btn-sm btn-outline-primary ${styles.request_btn}`}
                  type="button"
                  onClick={handleShowPrompt}
                >
                  Confirm and make payment
                </button>
              </div>
            )}
            {state.showFinalPrompt && (
              <ModalMessage
                title={
                  <FontAwesomeIcon
                    icon={["fas", "check-circle"]}
                    color="blue"
                  />
                }
                onHide={() => {
                  setStateValue("showFinalPrompt", false);
                }}
                show={state.showFinalPrompt}
              >
                <h3 className="text-center">
                  Are you ready to submit this request?
                </h3>
                <p className="text-center">
                  All supporting files and documents should be duely uploaded.
                  After submission, this business request cannot be changed.
                </p>
                <div className={styles.button_wrapper}>
                  <button
                    className={`btn btn-sm btn-outline-primary ${styles.request_btn}`}
                    type="button"
                    onClick={finalSubmission}
                  >
                    Confirm
                  </button>
                </div>
              </ModalMessage>
            )}
          </div>
        )}
        {businessRequest.requestStatus === "Submitted" && (
          <div className={styles.button_wrapper}>
            <Link
              to={`/payment/makePayment?request_code=${businessRequest.id}`}
            >
              <button
                className={`btn btn-lg btn-primary ${styles.request_btn}`}
                type="button"
              >
                Pay now
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBusinessRequest;
