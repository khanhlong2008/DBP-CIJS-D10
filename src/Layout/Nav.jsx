/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../Styles/App.css";
class Nav extends Component {
  constructor(props){
    super(props)
    this.state={
      flag:0,
    }
  }
  render() {
    return (
      <nav className="navbar  nav-bar navbar-position">
        <div className="navbar-header">
          <Link to="/">
            <i className="fas fa-film fa-3x"></i>
          </Link>
          <Link to="/" className="navbar-brand cursor">
            HOME | REACT-MOVIE
          </Link>
        </div>
      </nav>
    );
  }

}

export default Nav;
