/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class ActorDetailItem extends Component {
  render() {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const {profile_path ,name } = this.props.castItem
    return (
      <div className="card-item shadow">
        <div className="card">
          <img
            src={IMG_URL + profile_path}
            alt=""
          />
        </div>
        <div className="card-content">
          <h3>{name}</h3>
        </div>
      </div>
    );
  }
}

export default ActorDetailItem;
