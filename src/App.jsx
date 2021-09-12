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
