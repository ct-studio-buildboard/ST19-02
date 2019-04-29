import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Drinks from "./Drinks";
import Decor from "./Decor";
import * as ReactDOM from "react-dom";
import fd from "./images/food.jpg";
import dk from "./images/drinks.jpg";
import es from "./images/essentials.jpg";
import dc from "./images/decorations.jpg";

class Supplies extends Component {
  handleBack = () => {
    ReactDOM.render(<Drinks />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Decor />, document.getElementById("root"));
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
                    src={es}
                    alt="supplies"
                    style={{ width: "100%", opacity: "0.5" }}
                  />
                  <div class="centered">What types of supply do you need?</div>
                </div>
              </div>
              <div class="columnn">
                <div class="columnnn">
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Napkins</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Cups</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Plates</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Cutlery</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Serving Tools</label>
                  </div>
                  <div class="roww">
                    <input type="checkbox" />
                    <label>Table Cloth</label>
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

export default Supplies;
