import { Route,Redirect } from "react-router-dom";

 function ProtectedRoute ({ children, path }) {
  const isLoggedIn = localStorage.getItem("isAuth");

  return (
     <> {isLoggedIn?<Route path={path}>{children}</Route>:<Redirect to="/"/>}
   </>
  );
}

export default ProtectedRoute;
