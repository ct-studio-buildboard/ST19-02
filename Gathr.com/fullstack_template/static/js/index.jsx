import React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Test from "./Test";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<Test />, document.getElementById("root"));
serviceWorker.unregister();
