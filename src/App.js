import "./App.css";
import React, { Component } from "react";
import TodoApp from "./lecture4/Todo/TodoApp";
// import LDMajor from "./lecture4/Burger/LDMajor";
// import Car from "./lecture4/Car/Car";
// import SmartphoneStore from "./lecture4/SmartphoneStore/SmartstoreComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Car /> */}
        {/* <SmartphoneStore /> */}
        {/* <LDMajor/> */}
        <TodoApp/>
      </div>
    );
  }
}

export default App;