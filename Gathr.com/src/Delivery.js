import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import * as ReactDOM from "react-dom";
import Package from "./Package";
import Thanks from "./Thanks";

class Delivery extends Component {
  handleBack = () => {
    ReactDOM.render(<Package />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Thanks />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main" id="background-container">
          <div className="panel panel-left-even">
            <h3>Shipping Details</h3>
            <div class="container">
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Host
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="Gabriel" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Party
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="Easter" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Number of guests
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="Number" defaultValue="10" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Time
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="4/21/2019, 8pm" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Delivery time
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="6pm" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Address
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="1 East Loop Road" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }} />
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="New York, NY 10044" />
                </div>
              </div>
            </div>
          </div>
          <div className="panel panel-right-even">
            <h3>Payment Details</h3>
            <div class="container">
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Name on card
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="Gabriel" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Card number
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="**** **** **** 1234" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Expiration
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="10/2020" />
                </div>
              </div>
              <div class="row">
                <div class="col-sm" style={{ textAlign: "left" }}>
                  Security code
                </div>
                <div class="col-sm" style={{ textAlign: "left" }}>
                  <input type="text" defaultValue="567" />
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <button className="button" onClick={this.handleBack}>
              Back
            </button>
            <button className="button" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Delivery;
