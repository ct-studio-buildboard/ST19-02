import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Supplies from "./Supplies";
import Processing from "./Processing";
import * as ReactDOM from "react-dom";
import fd from "./images/food.jpg";
import dk from "./images/drinks.jpg";
import es from "./images/essentials.jpg";
import dc from "./images/decorations.jpg";

class Decor extends Component {
  handleBack = () => {
    ReactDOM.render(<Supplies />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Processing />, document.getElementById("root"));
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
                    src={dc}
                    alt="supplies"
                    style={{ width: "100%", opacity: "0.5" }}
                  />
                  <div class="centered">How would you like to decorate?</div>
                </div>
              </div>
              <div class="columnn">
                <div class="columnnn">
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Photo Booth Kit</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Balloons</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Table Decorations</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Wall Decorations</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Flowers</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Candles</label>
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

export default Decor;
