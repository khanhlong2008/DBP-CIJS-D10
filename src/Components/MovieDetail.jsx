import React, { Component } from "react";
import ActorDetailList from "./ActorDetailList";
import BackDropDetail from "./BackDropDetail";
import Video from "./Video";

class MovieDetail extends Component {
  render() {
    const { backDrop, actor ,video} = this.props;
    return (
      <div>
        <BackDropDetail backDrop={backDrop} />
        <Video video={video}/>
        <ActorDetailList actor={actor}/>
      </div>
    );
  }
}

export default MovieDetail;
