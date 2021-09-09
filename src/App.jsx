import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.module.css";

//Components
import Layout from "./components/layout/Layout";

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

library.add(fab, fas);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/"><Layout><Home /></Layout></Route>
        <Route exact path="/dashboard"><Dashboard /></Route>
      </Switch>
    </Router>
  );
}

export default App;
