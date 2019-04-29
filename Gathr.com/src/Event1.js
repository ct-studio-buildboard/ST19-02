import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Details from "./Details";
import Event2 from "./Event2";
import * as ReactDOM from "react-dom";
import cd from "./images/casual_dining.jpg";
import bd from "./images/celebration.jpg";
import hd from "./images/holiday.jpg";

class Event1 extends Component {
  handleBack = () => {
    ReactDOM.render(<Details />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Event2 />, document.getElementById("root"));
  };

  myFunction = () => {
    document.getElementById("foo1a").setAttribute("class", "style1");
    document.getElementById("foo1b").setAttribute("class", "h6b");
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div class="main" id="background-container">
          <div class="panel panel-default">
            <h2>What are you celebrating?</h2>
            <div class="row">
              <div class="colomn">
                <h5>Casual</h5>
                <img src={cd} class="image" />
                <h6>Dinner party, Movie night, Game night...</h6>
              </div>
              <div class="colomn">
                <h5>Celebration</h5>
                <img src={bd} class="image" />
                <h6>Birthday, Bachelorettte party, Gender reveal...</h6>
              </div>
              <div class="colomn">
                <h5>Holiday</h5>
                <a>
                  <img
                    src={hd}
                    onClick={this.myFunction}
                    class="image"
                    id="foo1a"
                  />
                </a>
                <h6 id="foo1b">Halloween, Easter, Thanksgiving...</h6>
              </div>
            </div>
          </div>
          <div class="buttons">
            <button class="button" onClick={this.handleBack}>
              Back
            </button>
            <button class="button" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Event1;
