import userImage from "../../images/user.png";
import useContextGetter from "../../hooks/useContextGetter";
import accountStyles from "./Account.module.css";
import editStyles from "./Edit.module.css";
import { Formik, Form, Field } from "formik";
import { TextField } from "../../components/form/text/TextField";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";

const EditProfile = () => {
  const { user, login, propagateMessage } = useContextGetter();
  const initialUserValues = {
    email: user.email,
    phoneNumber: user.phoneNumber,
    firstName: user.firstName,
    lastName: user.lastName,
    otherNames: user.otherNames,
    gender: user.gender,
    dateOfBirth: user.dateOfBirth,
    address: user.address,
    city: user.city,
    stateOfResidence: user.stateOfResidence,
    countryOfResidence: user.countryOfResidence
  };
  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().max(14).required("Enter your phone number"),
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First name is required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Last name is required"),
  });
  const handleEdit = async (values, { setSubmitting }) => {
    try {
      const res = await API.patch(`/api/v1/User/profile`, values);
      if (res.data.success) {
        console.log(values);
        login({...user,...values});
        propagateMessage({
          content: "Profile updated",
          title: "Success",
          type: "success",
          timeout: 5000,
        });
      }
    } catch (e) {
      console.log(e.response);
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
    <div className={`container-fluid ${accountStyles.account_wrapper}`}>
      <img
        src={userImage}
        alt="User"
        className={`${accountStyles.user_image}`}
      />
      <Formik
        initialValues={initialUserValues}
        enableReinitialize={true}
        validationSchema={validate}
        onSubmit={handleEdit}
      >
        {({ handleSubmit, isSubmitting, handleChange, values }) => (
          <Form className="w-100 px-4" onSubmit={handleSubmit}>
            <div className="row">
              <div className={`col-md-6`}>
                <label>First name</label>
                <TextField
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={values.firstName}
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-6`}>
                <label>Other names</label>
                <TextField
                  label="Other Names"
                  name="otherNames"
                  type="text"
                  placeholder="Other Names"
                  onChange={handleChange}
                  value={values.otherNames}
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-6`}>
                <label>Last name</label>
                <TextField
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onChange={handleChange}
                  value={values.lastName}
                  placeholder="Last Name"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                /></div>
                <div className={`col-md-6`}>
                  <label>Gender</label>
                  <Field
                    as="select"
                    name="gender"
                    onChange={handleChange}
                    value={values.gender}
                    className={`${editStyles.select_field}`}
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </Field>
                </div>
                <div className={`col-md-6`}>
                <label>Email address</label>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="william@yahoo.com"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>

              <div className={`col-md-6`}>
                <label>Phone number</label>
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                  onChange={handleChange}
                  value={values.phoneNumber}
                  placeholder="+2331234567890"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-6`}>
                <label>Date of Birth</label>
                <TextField
                  label="dd/mm/yyyy"
                  name="dateOfBirth"
                  type="date"
                  onChange={handleChange}
                  value={values.dateOfBirth}
                  placeholder="dateOfBirth"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-6`}>
                  <label>Address</label>
                  <Field
                    as="textarea"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                    className={`${editStyles.select_field}`}
                  >
                  </Field>
              </div>
              <div className={`col-md-6`}>
                <label>City</label>
                <TextField
                  label="city"
                  name="city"
                  type="text"
                  onChange={handleChange}
                  value={values.city}
                  placeholder="city"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-6`}>
                <label>State of residence</label>
                <TextField
                  label="state of residence"
                  name="stateOfResidence"
                  type="text"
                  onChange={handleChange}
                  value={values.stateOfResidence}
                  placeholder="state of residence"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
              <div className={`col-md-12`}>
                <label>Country of Residence</label>
                <TextField
                  label="country"
                  name="countryOfResidence"
                  type="text"
                  onChange={handleChange}
                  value={values.countryOfResidence}
                  placeholder="country of residence"
                  className={editStyles.wrapper}
                  inputClassName={editStyles.field}
                />
              </div>
            </div>
           
            <div className="d-flex w-100 align-items-center justify-content-center my-4">
              <button type="submit" className="btn btn-lg btn-outline-primary">
                {!isSubmitting ? (
                  "Update Profile"
                ) : (
                  <Spinner animation="border" variant="light" />
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default EditProfile;
