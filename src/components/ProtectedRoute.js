import { Route, Redirect, useHistory } from "react-router-dom";
import { NoAuthURL } from '../store/NoAuthURL';

function ProtectedRoute({ children, routePath, ...rest }) {
  const isLoggedIn = localStorage.getItem("isAuth");
  const user = JSON.parse(localStorage.getItem("user"));
  const { location: {pathname} } = useHistory();
  const pathnameTree=pathname.split('/');

  return (
    <div>
      {isLoggedIn && user ? (
        <Route {...rest} path={routePath}>{children}</Route>) 
        :(NoAuthURL.includes(`/${pathnameTree[1]}`)) ?<Redirect to={pathname} />:<Redirect to="/" />}
    </div>
  );
}

export default ProtectedRoute;
