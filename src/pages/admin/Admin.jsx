// import AdminSideNav from "../../components/Navigation/adminNav/AdminSideNav";
// import AdminTopNav from "../../components/Navigation/adminNav/AdminTopNav";
import styles from "./Admin.module.css";
import user_image from "../../images/user.png";
import API from "../../utils/BackendApi";
import { useEffect, useState } from "react";
import useContextGetter from "../../hooks/useContextGetter";
import ModalMessage from "../../components/message/ModalMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatErrors } from "../../utils/error.utils";

const initialstate = {
  users: [],
  pageLoaded: false,
  showViewUserModal: false,
  currentUser: {},
  showMakeUserAdminConfirmModal: false,
  currentUserRoles:[]
};

const Admin = () => {
  const [state, setState] = useState(initialstate);
  const { user, propagateMessage } = useContextGetter();

  const loadData = async () => {
    try {
      const res = await API.get(`/api/v1/User/users`);

      if (res.data.success) {
        setState((prevState) => ({
          ...prevState,
          users: res.data.data.$values,
          pageLoaded: true,
        }));
      }
    } catch (e) {}
  };

  useEffect(() => {
    loadData();
    //eslint-disable-next-line
  }, []);

  const viewUser = async(userId) => {
    const userToView = state.users.find((user) => user.id === userId);
    setState((prevState) => ({
      ...prevState,
      currentUser: userToView ? userToView : {},
      showViewUserModal: true,
    }));

    const res = await API.get(`/api/v1/User/roles?userId=${userId}`);
    setState((prevState) => ({
        ...prevState,
        currentUserRoles: res.data.data ? res.data.data.roles.$values : [],
      }));
  };

  const makeUserAdmin = async () => {
    try {
        const res = await API.patch(`/api/v1/User/roles?userId=${state.currentUser.id}&role=Admin`);
        if (res.data.success) {
          propagateMessage({
            content:
              "Admin role added to this user successfully.",
            title: "Success",
            type: "success",
            timeout: 3000,
          });
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
        setStateValue("showMakeUserAdminConfirmModal", false);
      }
  };

  const setStateValue = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  return (
    <div className={`container ${styles.wrapper}`}>
      <h1 className="my-4 px-4">All users</h1>
      {state.users.length ? (
        state.users.map((userData, index) => {
          return (
            <div className={`${styles.users}`} key={index}>
              <div className={`${styles.user}`} >
                <div className={``}>
                  <img
                    src={user_image}
                    alt="User"
                    className={`${styles.image}`}
                  />
                </div>
                <div className={`${styles.user_info}`}>
                  <div className={`${styles.user_name}`}>
                    <h3>
                      {userData.firstName} {userData.otherNames}{" "}
                      {userData.lastName}
                    </h3>
                    <p>{userData.email}</p>
                  </div>
                  <button
                    className={`${styles.btn}`}
                    onClick={() => {
                      viewUser(userData.id);
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className={`${styles.users}`}>
          There is no user in the system yet
        </div>
      )}

      {state.showViewUserModal && (
        <ModalMessage
          title="View User"
          onHide={() => {
            setStateValue("showViewUserModal", false);
          }}
          show={state.showViewUserModal}
        >
          <div className="px-3">
            <h2>
              {state.currentUser.firstName}{" "}
              {state.currentUser.otherNames && state.currentUser.otherNames}{" "}
              {state.currentUser.lastName}
            </h2>
            <p>
              <strong>Email: </strong> {state.currentUser.email}
            </p>
            {state.currentUser.phoneNumber && (
              <p>
                <strong>Phone number: </strong> {state.currentUser.phoneNumber}
              </p>
            )}
            {state.currentUser.gender && (
              <p>
                <strong>Gender: </strong>
                {state.currentUser.gender}
              </p>
            )}
            {state.currentUser.dateOfBirth && (
              <p>
                <strong>Date of birth: </strong>
                {state.currentUser.dateOfBirth}
              </p>
            )}
            {state.currentUser.address && (
              <p>
                <strong>Address: </strong>
                {state.currentUser.address}
              </p>
            )}
            {state.currentUser.city && (
              <p>
                <strong>City of residence: </strong>
                {state.currentUser.city}
              </p>
            )}

            {state.currentUser.stateOfResidence && (
              <p>
                <strong>State of residence</strong>
                {state.currentUser.stateOfResidence}
              </p>
            )}
            {state.currentUser.countryOfResidence && (
              <p>
                <strong>Country of residence</strong>
                {state.currentUser.countryOfResidence}
              </p>
            )}
             {state.currentUserRoles.length && (
              <p>
                <strong>User roles: </strong>
                {state.currentUserRoles.join(",")}
              </p>
            )}
          </div>
          <div>
            {user.roles.$values.includes("SuperAdmin") && !state.currentUserRoles.includes("Admin") && (
              <button
                className={`${styles.btn}`}
                onClick={() => {
                    setState((prevState) => ({
                        ...prevState,
                        showViewUserModal: false,
                        showMakeUserAdminConfirmModal:true
                      }));
                  
                }}
              >
                Make Admin
              </button>
            )}
          </div>
        </ModalMessage>
      )}
      {state.showMakeUserAdminConfirmModal && (
        <ModalMessage
          title={
            <FontAwesomeIcon icon={["fas", "check-circle"]} color="red" />
          }
          onHide={() => {
            setStateValue("showMakeUserAdminConfirmModal", false);
          }}
          show={state.showMakeUserAdminConfirmModal}
          bg="red"
        >
          <h3 className="text-center">
            Are you sure this user should be an admin?
          </h3>
          <p className="text-center">
            AN admin has access to user files which are sensitive. Be sure that
            this user has been approved to work as an admin at ITIAA.
          </p>
          <div>
            <button
              className={`btn btn-sm btn-outline-danger`}
              type="button"
              onClick={()=>{makeUserAdmin()}}
            >
              Confirm
            </button>
          </div>
        </ModalMessage>
      )}
    </div>
  );
};
export default Admin;
