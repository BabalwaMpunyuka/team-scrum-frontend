import useContextGetter from "../../hooks/useContextGetter";
import styles from "./businessRequest.module.css";
import { Formik, Field } from "formik";
import { TextField } from "../../components/form/text/TextField";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";
import { useHistory } from "react-router-dom";

const AddBusinessRequest = () => {
const {propagateMessage, addBusinessRequest } = useContextGetter();
  const history=useHistory();
  const initialValues = {
    requestType: "Modelling",
    businessEmail: "",
    businessMobileNumber: "",
    businessName: "",
    requestDetails: "",
    jobTitle: "",
  };
  const validate = Yup.object().shape({
    requestType: Yup.string().required("Request type is required"),
    requestDetails: Yup.string()
      .min(200,"Request details must be more than 200 characters")
      .required("Enter deatils of your request."),
    businessName: Yup.string()
      .min(3,"Business name must be more than 3 characters")
      .required(
        "Enter your business name. Use your name if you don't have a business"
      ),
    businessMobileNumber: Yup.string()
      .min(14,"Enter mobile phone number with country code. E.g +2347000000000")
      .required(
        "Enter your business mobile number. Use your personal mobile number if you don't have a business"
      ),
    businessEmail: Yup.string()
      .email("Please enter a valid email address")
      .required(
        "Business Email is required"
      ),
    jobTitle: Yup.string()
      .min(3,"Job title must be more than 3 characters")
      .required(
        "Job title is required"
      ),
  });

  const handleAddBusinessRequest = async (values, { setSubmitting }) => {
    try {
        const res = await API.post(`/api/v1/BusinessRequest`, values);
        
        if (res.data.success) {
            addBusinessRequest(res.data.data);
            propagateMessage({
                content: "Business request details submitted successfully. Next steps is uploading files to support your request.",
                title: "Business request",
                type: "success",
                timeout: 3000,
              });
          setTimeout(()=>{history.replace(`/business-request/edit?request_code=${res.data.data.id}`)},1000)
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
        setSubmitting(false);
      }
  };
  return (
    <div className="container">
      <div className={styles.content_wrapper}>
        <span className={styles.prompt}>
          Thank you for using our services. To ensure that we meet our clients
          expectations we would appreciate that all clients fill a form of
          service request. If you are requesting a personal service, provide
          your personal details.
        </span>
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validate}
        onSubmit={handleAddBusinessRequest}
      >
        {({ handleSubmit, errors,isSubmitting, handleChange, values }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <div className={styles.content_wrapper}>
                <h2>Business and request details</h2>
                <div className="row">
                  <div className={`col-md-6 py-2 ${styles.field_wrapper}`}>
                    <label className={styles.field_label}>
                      Name of business (Use your name if you don't have a
                      business)
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
                  <div className={`col-md-6 py-2 ${styles.field_wrapper}`}>
                    <label className={styles.field_label}>Request Type</label>
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
                </div>
                <div className="row">
                  <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
                    <label className={styles.field_label}>
                      Job Title (Enter Personal if this is not a business)
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
                </div>
                <div className="row">
                  <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
                    <label className={styles.field_label}>Business Email</label>
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
                </div>
                <div className="row">
                  <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
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
                </div>
                <div className="row">
                  <div className={`col-sm-12 py-2 ${styles.field_wrapper}`}>
                    <label className={styles.field_label}>
                      Detailed request (Provide datails such as company background, problems and outcomes you expect.)
                    </label>
                    <Field
                      as="textarea"
                      name="requestDetails"
                      onChange={handleChange}
                      value={values.requestDetails}
                      className={`${styles.field} ${styles.field_textarea}`}
                    ></Field>
                    <div className="text-danger"><span>{errors.requestDetails?errors.requestDetails :"Not less than 200 characters"}</span></div>
                  </div>
                </div>
              </div>
              <div className={styles.button_wrapper}>
                <button
                  className={`btn btn-md btn-primary ${styles.request_btn}`}
                  type="submit"
                  disabled={isSubmitting}
                >
                   {!isSubmitting ? (
                        "Submit request"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
                </button>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddBusinessRequest;
