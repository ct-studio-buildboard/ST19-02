import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Food from "./Food";
import Supplies from "./Supplies";
import * as ReactDOM from "react-dom";
import fd from "./images/food.jpg";
import dk from "./images/drinks.jpg";
import es from "./images/essentials.jpg";
import dc from "./images/decorations.jpg";

class Drinks extends Component {
  handleBack = () => {
    ReactDOM.render(<Food />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Supplies />, document.getElementById("root"));
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
            <div class="row">
              <div class="columnn">
                <div class="imagewithtext">
                  <img
                    src={dk}
                    alt="drinks"
                    style={{ width: "100%", opacity: "0.5" }}
                  />
                  <div class="centered">What would you like to drink?</div>
                </div>
              </div>
              <div class="columnn">
                <div class="columnnn">
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Juice</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Soda</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Beer</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Wine</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Cocktails</label>
                  </div>
                </div>
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

export default Drinks;
