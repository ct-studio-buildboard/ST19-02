import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <span
          className={this.getBadgeClasses()}
          style={{ height: "20px", verticalAlign: "baseline" }}
        >
          {this.formatCount()}
        </span>
        <div className="itemname">
          <span>{this.formatName()}</span>
        </div>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-success btn-sm"
          style={{
            margin: "5px",
            verticalAlign: "baseline",
            width: "30px"
          }}
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm"
          style={{
            margin: "5px",
            verticalAlign: "baseline",
            width: "30px"
          }}
        >
          -
        </button>
        <p className="itemprice">${this.formatPrice()}</p>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value;
  }

  formatName() {
    const { name } = this.props.counter;
    return name;
  }

  formatPrice() {
    const { unitPrice, value } = this.props.counter;
    let numb = unitPrice * value;
    numb = numb.toFixed(2);
    return numb;
  }
}

export default Counter;
