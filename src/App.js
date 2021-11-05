/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Register, LandingPage, HomePage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />

      <Route path="/Login"  component={Login} />
      <Route path="/Register" component={Register} />

      <Route path="/Home" exact={true} component={HomePage} />
    </Switch>
  );
}

export default App;
