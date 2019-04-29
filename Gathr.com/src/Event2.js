import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Event1 from "./Event1";
import Food from "./Food";
import * as ReactDOM from "react-dom";
import hn from "./images/hlwn.jpg";
import er from "./images/estr.jpg";
import tg from "./images/tnksgvng.jpg";

class Event2 extends Component {
  handleBack = () => {
    ReactDOM.render(<Event1 />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Food />, document.getElementById("root"));
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
                <h5>Halloween</h5>
                <img src={hn} class="image" />
                <h6 />
              </div>
              <div class="colomn">
                <h5>Easter</h5>
                <a>
                  <img
                    src={er}
                    onClick={this.myFunction}
                    class="image"
                    id="foo1a"
                  />
                </a>
                <h6 id="foo1b" />
              </div>
              <div class="colomn">
                <h5>Thanksgiving</h5>
                <img src={tg} class="image" />
                <h6 />
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

export default Event2;
