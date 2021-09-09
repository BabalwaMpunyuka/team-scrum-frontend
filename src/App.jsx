import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.module.css";

//Components
import Layout from "./components/layout/Layout";
// import LoggedInLayout from "./components/layout/LoggedInLayout"; //Serves as protected and logged layout

//Pages
import Home from "./pages/Home";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";

library.add(fab, fas);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Layout>
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
