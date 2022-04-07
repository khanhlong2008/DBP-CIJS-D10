import "./App.css";
import React, { Component } from "react";
import QuizzQuestionApp from "./lecture4/CIMidterm/QuizzQuestionApp";
import StudentManagement from "./lecture4/StudentManagement/StudenManagement";
import TodoApp from "./lecture4/Todo/TodoApp";
import LDMajor from "./lecture4/Burger/LDMajor";
import Car from "./lecture4/Car/Car";
import SmartphoneStore from "./lecture4/SmartphoneStore/SmartstoreComponent";

class App extends Component {
  render() {
    return (
      <div className="App background">
        {/* <Car /> */}
        {/* <SmartphoneStore /> */}
        {/* <LDMajor/> */}
        {/* <TodoApp/> */}
        <StudentManagement />
        {/* <QuizzQuestionApp/> */}
      </div>
    );
  }
}

export default App;