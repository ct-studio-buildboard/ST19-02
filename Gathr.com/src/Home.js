import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import Details from "./Details";
import Delivery from "./Delivery";
import * as ReactDOM from "react-dom";

class Home extends Component {
  handleClick = () => {
    ReactDOM.render(<Details />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main" id="background-container">
          <div className="panel panel-default">
            <h1>Throw an amazing party, in minutes</h1>
          </div>
          <div className="buttons">
            <button className="button" onClick={this.handleClick}>
              Get the party started!
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
