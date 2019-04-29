import React, { Component, ImageBackground, Text } from "react";

class BackgroundImage extends Component {
  render() {
    return (
      <img
        src={require("/Users/guti/Cornell/Spring Semester/Startup Studio/Website/gathr/src/images/party.jpeg")}
        style={{ width: "100%" }}
      />
    );
  }
}

export default BackgroundImage;
