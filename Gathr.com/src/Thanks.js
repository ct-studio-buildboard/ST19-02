import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Home from "./Home";
import * as ReactDOM from "react-dom";

class Thanks extends Component {
  handleClick = () => {
    ReactDOM.render(<Home />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main" id="background-container">
          <div className="panel panel-default">
            <h1 style={{ paddingBottom: "20px" }}>
              Thank you for using Gathr!
            </h1>
            <p>You Gathr kit will be delivered at</p>
            <p>1 East Loop Road, New York, NY</p>
            <p>on Sunday 4/21 at 6pm</p>
          </div>
          <div className="buttons">
            <button className="button" onClick={this.handleClick}>
              Home
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Thanks;
