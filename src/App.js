/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { LandingPage, HomePage } from "./pages";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/Home" exact={true} component={HomePage} />
    </Switch>
  );
}

export default App;
