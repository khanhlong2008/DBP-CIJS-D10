import "./App.css";
import React, { Component } from "react";
import Car from "./lecture4/Car/Car";
// import SmartphoneStore from "./lecture4/SmartphoneStore/SmartstoreComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Car />
        {/* <SmartphoneStore /> */}
      </div>
    );
  }
}

export default App;