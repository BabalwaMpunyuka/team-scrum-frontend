import { Route,Redirect } from "react-router-dom";

 function ProtectedRoute ({ children, ...rest }) {
  const isLoggedIn = localStorage.getItem("isAuth");

  return (
     <div> {isLoggedIn?<Route {...rest}>{children}</Route>:<Redirect to="/"/>}
   </div>
  );
}

export default ProtectedRoute;
