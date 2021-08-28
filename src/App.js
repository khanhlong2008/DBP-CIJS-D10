import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Layouts/Nav";
import Home from "./Containers/Home";
import About from "./Containers/About";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
