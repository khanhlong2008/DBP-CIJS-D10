/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import Menu from "../Contants/Menu";
import { Link, Route } from "react-router-dom";
import "./../Styles/App.css";
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to} className="cursor">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};
class Nav extends Component {
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
        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">{this.ShowMenu(Menu)}</ul>
        </div>
      </nav>
    );
  }
  ShowMenu = (Menu) => {
    var result = null;
    if (Menu.length > 0) {
      result = Menu.map((MenuItem, index) => {
        return (
          <MenuLink
            key={index}
            to={MenuItem.to}
            activeOnlyWhenExact={MenuItem.exact}
            label={MenuItem.name}
          />
        );
      });
    }
    return result;
  };
}

export default Nav;
