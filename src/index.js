import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import "hover.css/css/hover-min.css"
// import "jquery/dist/jquery";
import "jquery/dist/jquery.slim";
import "@fortawesome/fontawesome-free/css/all.css";

/**------local files--------- */
import "./assets/css/styles.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
