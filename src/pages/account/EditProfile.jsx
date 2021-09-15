import userImage from "../../images/user.png";
import useContextGetter from "../../hooks/useContextGetter";
import accountStyles from "./Account.module.css";
import editStyles from "./Edit.module.css";
import { Formik, Form } from "formik";
import { TextField } from "../../components/form/text/TextField";
import * as Yup from "yup";
import { Spinner } from "react-bootstrap";
import API from "../../utils/BackendApi";
import { formatErrors } from "../../utils/error.utils";

const EditProfile = () => { 
    const { user, login,propagateMessage } = useContextGetter();
    const initialUserValues={
        email: user.email,
        phoneNumber: user.phoneNumber,
        firstName: user.firstName,
        lastName: user.lastName,
      }
  const validate = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .max(14)
      .required("Enter your phone number"),
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
        login(res.data.data);
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
        {({handleSubmit, isSubmitting, handleChange, values}) => (
            <Form className="w-100 px-4" onSubmit={handleSubmit}>
              <div className="row">
                <div className={`col-md-6 ${editStyles.input_wrapper}`}>
                   <label>First name</label> 
                  <TextField
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.firstName}
                    className={editStyles.field}
                  />
                </div>
                <div className={`col-md-6 ${editStyles.input_wrapper}`}>
                <label>Last name</label> 
                  <TextField
                    label="Last Name"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    placeholder="Last Name"
                    className={editStyles.field}
                  />
                </div>
              </div>
              <div className="row">
                <div className={`col-md-6 ${editStyles.input_wrapper}`}>
                <label>Email address</label>
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="william@yahoo.com"
                    className={editStyles.field}
                  />
                </div>
                <div className={`col-md-6 ${editStyles.input_wrapper}`}>
                <label>Phone number</label>
                  <TextField
                    label="Phone Number"
                    name="phoneNumber"
                    type="tel"
                    onChange={handleChange}
                    value={values.phoneNumber}
                    placeholder="+2331234567890"
                    className={editStyles.field}
                  />
                </div>
              </div>
              <div className="d-flex w-100 align-items-center justify-content-center mt-3"><button type="submit" className="btn btn-lg btn-primary">
              {!isSubmitting ? (
                        "Update Profile"
                      ) : (
                        <Spinner animation="border" variant="light" />
                      )}
              </button></div>
            </Form>
        )}
      </Formik>
    </div>
  );
};
export default EditProfile;
