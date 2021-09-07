/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./../Styles/App.css";

class Tab extends Component {

  render() {
      const {onfetch} = this.props
    return (
      <nav className="navbar nav-bar  center-tab ">
        <a className="navbar-brand cursor" onClick={()=> onfetch('popular')}>POPULAR</a>
        <a className="navbar-brand cursor" onClick={()=> onfetch('coming')}>UP COMMING</a>
        <a className="navbar-brand cursor" onClick={()=> onfetch('rated')}>TOP RATED</a>
        <a className="navbar-brand cursor" onClick={()=> onfetch('nowPlaying')}>NOW PLAYING</a>
      </nav>
    );
  }
}

export default Tab;
