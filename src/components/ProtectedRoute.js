import { Route,Redirect } from "react-router-dom";

 function ProtectedRoute ({ children, path, ...rest }) {
  const isLoggedIn = localStorage.getItem("isAuth");

  return (
     <div> {isLoggedIn?<Route {...rest} path={path}>{children}</Route>:<Redirect to="/" />}
   </div>
  );
}

export default ProtectedRoute;
