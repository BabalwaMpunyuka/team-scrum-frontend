import userImg from "../../images/user.png";
import accountStyles from "./Account.module.css";
import { Link } from "react-router-dom";
import useContextGetter from "../../hooks/useContextGetter";

const Account = () => {
  const { user } = useContextGetter();
  return (
      <div className={`${accountStyles.account_wrapper}`}>
        <img
          src={userImg}
          alt="User"
          className={`${accountStyles.user_image}`}
        />
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <h3>Email address</h3>
        <p>{user.email}</p>
        {user.phoneNumber && (
          <>
            <h3>Phone number</h3>
            <p>{user.phoneNumber}</p>
          </>
        )}
        <Link to="/account/edit">
          <button className="btn btn-md btn-primary">Edit Profile</button>
        </Link>
      </div>
  );
};

export default Account;
