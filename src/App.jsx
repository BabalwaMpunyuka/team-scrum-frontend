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
import FinancialModelling from "./pages/portfolio/FinancialModelling";
import FinancialAppraisals from "./pages/portfolio/FinancialAppraisals";
import FinancialDiagnostics from "./pages/portfolio/FinancialDiagnostics";

library.add(fab, fas);

function App() {
  return (
    <Router>
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
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/portfolio/financial-appraisals">
              <FinancialAppraisals />
            </Route>
            <Route exact path="/portfolio/financial-diagnostic">
              <FinancialDiagnostics />
            </Route>
            <Route exact path="/portfolio/financial-modelling">
              <FinancialModelling />
            </Route>
            <ProtectedRoute>
              <Route exact path="/dashboard">
                <Dashboard />
              </Route>
            </ProtectedRoute>
          </GlobalLayout>
        </Switch>
      </AppState>
    </Router>
  );
}

export default App;
