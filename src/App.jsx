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
            
            <ProtectedRoute  exact path="/dashboard">
                <Dashboard />
            </ProtectedRoute>

          </GlobalLayout>
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
