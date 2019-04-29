import React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Home from "./Home";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Home />, document.getElementById("root"));
serviceWorker.unregister();
