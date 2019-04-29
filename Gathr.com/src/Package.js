import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import * as ReactDOM from "react-dom";
import Collapsible from "react-collapsible";
import Counters from "./components/counters";
import Delivery from "./Delivery";
import hb from "./images/hamburger.png";
import ct from "./images/cocktail.png";
import sp from "./images/fork.png";
import dc from "./images/balloons.png";

class Package extends Component {
  state = {
    counters: [
      { id: 1, value: 1, name: "Mini quiches", unitPrice: 5.99 },
      { id: 2, value: 1, name: "Pizza bagels", unitPrice: 4.99 },
      { id: 3, value: 1, name: "Veggie platter", unitPrice: 3.99 },
      { id: 4, value: 1, name: "Tortilla chips", unitPrice: 4.99 },
      { id: 5, value: 1, name: "Hummus", unitPrice: 2.99 },
      { id: 6, value: 1, name: "Easter Cookies", unitPrice: 6.99 }
    ],
    drinks: [
      { id: 1, value: 1, name: "White wine", unitPrice: 14.99 },
      { id: 2, value: 1, name: "Blue Moon beer 6pk", unitPrice: 11.99 },
      { id: 3, value: 1, name: "Coca Cola 1L", unitPrice: 1.49 },
      { id: 4, value: 1, name: "Ginger Ale 1L", unitPrice: 1.49 },
      { id: 5, value: 1, name: "Orange juice 1.5L", unitPrice: 1.99 }
    ],
    supplies: [],
    decor: [
      { id: 1, value: 2, name: "Easter buckets", unitPrice: 2.99 },
      { id: 2, value: 2, name: "Fake grass", unitPrice: 1.99 },
      { id: 3, value: 1, name: "Easter eggs 8pk", unitPrice: 1.99 },
      { id: 4, value: 1, name: "Easter play-dough 4pk", unitPrice: 3.99 },
      { id: 5, value: 1, name: "Easter bubbles", unitPrice: 2.99 }
    ]
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleClick = () => {
    ReactDOM.render(<Delivery />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main" id="background-container">
          <div className="panel panel-left">
            <h3>Discover your Gathr kit</h3>
            <Collapsible
              trigger={
                <p className="title">
                  <img src={hb} className="icon" />
                  <h1 className="name">Food</h1>${this.getTotalFoods()}
                </p>
              }
              className="Collapsible"
            >
              <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </Collapsible>
            <Collapsible
              trigger={
                <p className="title">
                  <img src={ct} className="icon" />
                  <h1 className="name">Drinks</h1>${this.getTotalDrinks()}
                </p>
              }
              className="Collapsible"
            >
              <Counters
                counters={this.state.drinks}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </Collapsible>
            <Collapsible
              trigger={
                <p className="title">
                  <img src={sp} className="icon" />
                  <h1 className="name">Supplies</h1>${this.getTotalSupplies()}
                </p>
              }
              className="Collapsible"
            >
              <Counters
                counters={this.state.supplies}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </Collapsible>
            <Collapsible
              trigger={
                <p className="title">
                  <img src={dc} className="icon" />
                  <h1 className="name">Decorations</h1>${this.getTotalDecor()}
                </p>
              }
              className="Collapsible"
            >
              <Counters
                counters={this.state.decor}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDelete={this.handleDelete}
              />
            </Collapsible>
          </div>
          <div className="panel panel-right">
            <h3>Easter Party</h3>
            <div class="container">
              <div class="row">
                <div
                  class="col-sm"
                  style={{ width: "20px", textAlign: "left" }}
                >
                  Date
                </div>
                <div
                  class="col-sm"
                  style={{ width: "20px", textAlign: "right" }}
                >
                  4/21/2019
                </div>
              </div>
              <div class="row">
                <div
                  class="col-sm"
                  style={{ width: "20px", textAlign: "left" }}
                >
                  Time
                </div>
                <div
                  class="col-sm"
                  style={{ width: "20px", textAlign: "right" }}
                >
                  8pm
                </div>
              </div>
              <div class="row">
                <div className="buttonss">
                  <button className="button" onClick={this.handleClick}>
                    Order now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  getTotalFoods() {
    let total = this.state.counters.reduce(
      (sum, i) => (sum += i.value * i.unitPrice),
      0
    );
    total = total.toFixed(2);
    return total;
  }

  getTotalDrinks() {
    let total = this.state.drinks.reduce(
      (sum, i) => (sum += i.value * i.unitPrice),
      0
    );
    total = total.toFixed(2);
    return total;
  }

  getTotalSupplies() {
    let total = this.state.supplies.reduce(
      (sum, i) => (sum += i.value * i.unitPrice),
      0
    );
    total = total.toFixed(2);
    return total;
  }

  getTotalDecor() {
    let total = this.state.decor.reduce(
      (sum, i) => (sum += i.value * i.unitPrice),
      0
    );
    total = total.toFixed(2);
    return total;
  }
}

export default Package;
