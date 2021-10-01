import userImg from "../../images/user.png";
import accountStyles from "./Account.module.css";
import { Link } from "react-router-dom";
import useContextGetter from "../../hooks/useContextGetter";

const Account = () => {
  const { user } = useContextGetter();
  return (
    <>
      <div className={accountStyles.account_wrapper}>
        <h2 className="my-4 px-4">
          <span> Account Information </span>{" "}
        </h2>
        <div className={accountStyles.hero}>
          <img src={userImg} alt="User" className={accountStyles.user_image} />
          <div className={accountStyles.row_1}>
            <h2>
              {user.firstName} {user.otherNames && user.otherNames}{" "}
              {user.lastName}
            </h2>
            <p>{user.email}</p>
            {user.phoneNumber && <p>{user.phoneNumber}</p>}
            <Link to="/account/edit">
              <button className="btn btn-md btn-outline-primary">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
        <div className={accountStyles.row_2}>
          <h2>More About you</h2>
          {user.gender && (
            <p>
              <strong>Gender: </strong>
              {user.gender}
            </p>
          )}
          {user.dateOfBirth && (
            <p>
              <strong>Date of birth: </strong>
              {user.dateOfBirth}
            </p>
          )}
          {user.address && (
            <p>
              <strong>Address: </strong>
              {user.address}
            </p>
          )}
          {user.city && (
            <p>
              <strong>City of residence: </strong>
              {user.city}
            </p>
          )}

          {user.stateOfResidence && (
            <p>
              <strong>State of residence</strong>
              {user.stateOfResidence}
            </p>
          )}
          {user.countryOfResidence && (
            <p>
              <strong>Country of residence</strong>
              {user.countryOfResidence}
            </p>
          )}
          <div>
            <button className="btn btn-md btn-outline-primary">
              Change Picture
            </button>
            <Link to="/settings"><button className="btn btn-md btn-outline-primary">
              Change preferences
            </button></Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Account;
