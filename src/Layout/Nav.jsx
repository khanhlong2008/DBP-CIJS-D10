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
      <nav className="navbar  nav-bar ">
        <div className="navbar-header">
          <Link to="/">
            <i className="fas fa-film fa-3x"></i>
          </Link>
          <Link to="/" className="navbar-brand cursor">
            REACT-MOVIE
          </Link>
        </div>
        {/* <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="cursor">
              <Link to="/">POPULAR</Link>
            </li>
            <li className="cursor">
              <Link to="/">UPCOMING</Link>
            </li>
            <li className="cursor">
              <Link to="/">TO RATED</Link>
            </li>
          </ul>
        </div> */}
      </nav>
    );
  }

}

export default Nav;
