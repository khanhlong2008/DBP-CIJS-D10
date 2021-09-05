/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Nav from "./Layout/Nav";
import "./Styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./Contants/Routes";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>{this.ShowContent(routes)}</Switch>
        </Router>
      </div>
    );
  }
  ShowContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default App;
