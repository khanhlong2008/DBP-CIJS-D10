import React, { Component } from "react";
import ActorDetailItem from "./ActorDetailItem";

class ActorDetailList extends Component {
  render() {
    const { actor } = this.props;
    return (
      <div className="cards">
        {actor.map((castItem, index) => {
          return <ActorDetailItem key={index} castItem={castItem} />;
        })}
      </div>
    );
  }
}

export default ActorDetailList;
