import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Layouts/Nav";
import routes from "./Contants/Routes";
// import Home from './Containers/Home'
// import About from './Containers/About'
// import UserDetail from './Containers/UserDetail'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Nav />
          <div className="container">
            <Switch>
              {this.ShowContentPape(routes)}
              {/* <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/users/:login" component={UserDetail} /> */}
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
  ShowContentPape = (router) => {
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
