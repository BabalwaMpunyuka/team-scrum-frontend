import Head from '../dashboard/Head';
import SideNav from "../dashboard/SideNav";
import Footer from '../../components/footer/Footer';
import user from '../../images/user.png';
import accountStyles from './Account.module.css';
import editStyles from './Edit.module.css';
import { Link } from "react-router-dom";
import { Formik, Form, ErrorMessage } from "formik";
import { TextField } from "../../components/form/text/TextField";
import * as Yup from "yup";

const EditProfile = () => {
    const validate = Yup.object().shape({
        email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),
        phone: Yup.number().positive().integer()
        .max(14).required("Enter your phone number"),
        firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First name is required"),
        lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Last name is required"),
    });

    return (
        <div className='container-fluid'>
            <Head />
            <SideNav />
            <div className={`${account.account_wrapper}`}>
                <img src={user} alt="User" className={`img-responsive ${accountStyles.user_image}`}/>
                <Formik initialalues={{
                    email: "",
                    phone: "",
                    firstName: "",
                    lastName: "",
                }}
                validationSchema={validate}>
                    {(formik) => {
                        <div className="container">
                            <Form>
                                <div className="row">
                                    <div className={`.col-md-6 ${editStyles.col_md_6}`}>
                                        <TextField 
                                            label="First Name"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" />
                                    </div>
                                    <div className={`.col-md-6 ${editStyles.col_md_6}`}>
                                        <TextField 
                                            label="Last Name"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className={`.col-md-6 ${editStyles.col_md_6}`}>
                                        <TextField 
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            placeholder="william@yahoo.com"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" />
                                    </div>
                                    <div className={`.col-md-6 ${editStyles.col_md_6}`}>
                                        <TextField 
                                            label="Phone Number"
                                            name="phone"
                                            type="tel"
                                            placeholder="+2331234567890"
                                            className="form-control"
                                        />
                                        <ErrorMessage name="name" />
                                    </div>
                                </div>
                                <button type='submit' className="btn btn-md btn-primary">
                                    {/* Have a post request here to the backend */}
                                    <Link to="/edit_profile" className="edit">
                                        {""}
                                        Update profile
                                    </Link>
                                </button>     
                            </Form>
                        </div>
                    }}
                </Formik>
            </div>
            <Footer />
        </div>
    )
}
export default EditProfile;