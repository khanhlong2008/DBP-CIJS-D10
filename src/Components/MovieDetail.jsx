import React, { Component } from "react";
import ActorDetailList from "./ActorDetailList";
import BackDropDetail from "./BackDropDetail";

class MovieDetail extends Component {
  render() {
    const { backDrop, actor } = this.props;
    return (
      <div>
        <BackDropDetail backDrop={backDrop} />
        <ActorDetailList actor={actor}/>
      </div>
    );
  }
}

export default MovieDetail;
