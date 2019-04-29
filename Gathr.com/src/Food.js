import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Event2 from "./Event2";
import Drinks from "./Drinks";
import * as ReactDOM from "react-dom";
import fd from "./images/food.jpg";
import dk from "./images/drinks.jpg";
import es from "./images/essentials.jpg";
import dc from "./images/decorations.jpg";

class Food extends Component {
  handleBack = () => {
    ReactDOM.render(<Event2 />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Drinks />, document.getElementById("root"));
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
                    src={fd}
                    alt="food"
                    style={{ width: "100%", opacity: "0.5" }}
                  />
                  <div class="centered">What type of food would you like?</div>
                </div>
              </div>
              <div class="columnn">
                <div class="columnnn">
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Chips and Dips</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Finger Food</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Sit-down Meal</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Dessert</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Cake</label>
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

export default Food;
