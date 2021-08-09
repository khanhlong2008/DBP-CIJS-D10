/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./Car.css";
export default class Car extends Component {s
  constructor(props) {
    super(props);
    this.state = {
      selectedCar: "https://vinfast24h.net/wp-content/uploads/2020/10/LUX-A-M2-510x265.png",
    };
  }
  changeCarColor = (color) => {
    this.setState({
      selectedCar: color,
    });
  };
  render() {
    return (
      <div className="car">
        <div className="car__left">
          <h2>Please choose your car's color</h2>
          <img src={this.state.selectedCar} />
        </div>
        <div className="car__right">
          <button
            className="button red"
            onClick={() =>
              this.changeCarColor("https://vinfast24h.net/wp-content/uploads/2020/10/LUX-A-M2-510x265.png")
            }
          >
            Red
          </button>
          <button
            className="button black"
            onClick={() => this.changeCarColor("https://vinfast24h.net/wp-content/uploads/2020/10/LUX-A-M2-Gray-510x265.png")}
          >
            Black
          </button>
          <button
            className="button white"
            onClick={() => this.changeCarColor("https://vinfast24h.net/wp-content/uploads/2020/10/LUX-A-M2-White-1-510x265.png")}
          >
            White
          </button>
        </div>
      </div>
    );
  }
}
