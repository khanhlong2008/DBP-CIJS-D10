/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-secondary">
        <ul className="nav navbar-nav">
          <li className="nav-item cursor">
            <Link to="/">
              <a className="nav-link text-light">Home</a>
            </Link>
          </li>
          <li className="nav-item cursor">
            <Link to="/about">
              <a className="nav-link text-light">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
