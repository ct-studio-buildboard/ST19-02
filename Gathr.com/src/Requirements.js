import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Event2 from "./Event2";
import Processing from "./Processing";
import * as ReactDOM from "react-dom";
import fd from "./images/food.jpg";
import dk from "./images/drinks.jpg";
import es from "./images/essentials.jpg";
import dc from "./images/decorations.jpg";

class Requirements extends Component {
  handleBack = () => {
    ReactDOM.render(<Event2 />, document.getElementById("root"));
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
            <h2 class="h2b">What do you need?</h2>
            <div class="row">
              <div class="colomn">
                <input type="checkbox" />
                <h5 class="h5b">Food</h5>
                <img src={fd} class="image" />
              </div>
              <div class="colomn">
                <input type="checkbox" />
                <h5 class="h5b">Drinks</h5>
                <img src={dk} class="image" />
              </div>
              <div class="colomn">
                <input type="checkbox" />
                <h5 class="h5b">Essentials</h5>
                <img src={es} class="image" />
              </div>
              <div class="colomn">
                <input type="checkbox" />
                <h5 class="h5b">Decorations</h5>
                <img src={dc} class="image" />
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

export default Requirements;
