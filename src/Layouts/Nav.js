/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <ul className="nav navbar-nav">
          <li className="nav-item cursor">
            <Link to="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item cursor">
            <Link to="/about">
              <a className="nav-link">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
