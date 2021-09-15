import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.module.css";

//App state
import AppState from "./store/AppState";

//Components
import GlobalLayout from "./components/layout/GlobalLayout";
import ProtectedRoute from "./components/ProtectedRoute";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import Account from "./pages/account/Account";
import EditProfile from "./pages/account/EditProfile";
import Settings from "./pages/Settings/Settings";
import Report from "./pages/report/Report";
import Support from "./pages/support/Support";
// import ScrollToTop from "./components/ScrollToTop";

library.add(fab, fas);

function App() {
  return (
    <Router>
      {/* <ScrollToTop /> */}
      <AppState>
        <Switch>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <GlobalLayout>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/support">
              <Support />
            </Route>

            <ProtectedRoute exact path="/account">
              <Account />
            </ProtectedRoute>

            <ProtectedRoute exact path="/account/edit">
              <EditProfile />
            </ProtectedRoute>

            <ProtectedRoute exact path="/settings">
              <Settings />
            </ProtectedRoute>

            <ProtectedRoute exact path="/reports">
              <Report />
            </ProtectedRoute>

            <ProtectedRoute exact path="/dashboard">
              <Dashboard />
            </ProtectedRoute>

          </GlobalLayout>
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
