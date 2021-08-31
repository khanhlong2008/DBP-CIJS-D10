/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import navMenu from "../Contants/MenuRoutes";
import './../Styles/nav.css'
const NavLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link to={to} className="nav-link text-light">
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
      <nav className=" navbar-expand navbar-light bg-primary">
        <ul className="nav navbar-nav">{this.ShowNavMenu(navMenu)}</ul>
      </nav>
    );
  }
  ShowNavMenu = (navMenu) => {
    var result = null;
    if (navMenu.length > 0) {
      result = navMenu.map((navMenuItem, index) => {
        return (
          <NavLink
            key={index}
            to={navMenuItem.to}
            activeOnlyWhenExact={navMenuItem.exact}
            label={navMenuItem.name}
          />
        );
      });
    }
    return result;
  };
}

export default Nav;
