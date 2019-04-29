import React, { Component } from "react";
import hb from "./hamburger.png";

class Title extends Component {
  render() {
    return (
      <div className="title">
        <img src={hb} className="icon" />
        <h1 className="name">Food</h1>
      </div>
    );
  }
}

export default Title;
