import React, { Component } from "react";
import "./index.css";
import NavBar from "./components/navbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "rc-time-picker/assets/index.css";
import Home from "./Home";
import Event1 from "./Event1";
import * as ReactDOM from "react-dom";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "2019-04-21",
      startTime: "2019-04-21T24:00:00.000Z",
      startGuests: 10
    };
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
  }

  handleChangeDate(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeTime(date) {
    this.setState({
      startTime: date
    });
  }

  handleBack = () => {
    ReactDOM.render(<Home />, document.getElementById("root"));
  };

  handleNext = () => {
    ReactDOM.render(<Event1 />, document.getElementById("root"));
  };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="main" id="background-container">
          <div className="panel panel-default">
            <h2>Give us some details</h2>
            <h5>Select date</h5>
            <DatePicker
              style={{
                width: 200
              }}
              selected={this.state.startDate}
              onChange={this.handleChangeDate}
            />
            <h5>Select time</h5>
            <DatePicker
              selected={this.state.startTime}
              onChange={this.handleChangeTime}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={15}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
            <h5>Select number of guests</h5>
            <input
              type="number"
              defaultValue="10"
              onChange={this.handleChange}
            />
            <h6 />
            <div />
          </div>
          <div className="buttons">
            <button className="button" onClick={this.handleBack}>
              Back
            </button>
            <button className="button" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Details;
