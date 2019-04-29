import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Package from "./Package";
import Decor from "./Decor";
import * as ReactDOM from "react-dom";
import dots from "./images/dots.gif";

class Processing extends Component {
  handleBack = () => {
    ReactDOM.render(<Decor />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Package />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          onClick={this.handleNext}
          className="main"
          id="background-container"
        >
          <div className="panel panel-default">
            <h1>Building your Gathr kit</h1>
            <img src={dots} class="image" />
          </div>
        </div>

        <div className="buttons">
          <button className="button" onClick={this.handleClick}>
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Processing;
