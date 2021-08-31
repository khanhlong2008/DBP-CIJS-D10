import React, { Component } from "react";
import PropTypes from "prop-types";
import './../Styles/alert.css'
class Alert extends Component {
  render() {
    const { msg, type } = this.props;
    return (
      <div className={` alert-${type} mt-3 center`}>
        <p className="">{msg}</p>
      </div>
    );
  }
}
Alert.defaultProps = {
    type: "danger",
    msg: "Something wrong",
  };
Alert.propTypes = {
  type: PropTypes.string,
  msg: PropTypes.string,
};

export default Alert;
