import React, { Component } from "react";

class Video extends Component {
  render() {
    const { video} = this.props;
    const {key,name } = video
    const URL_VIDEO = "https://www.youtube-nocookie.com/embed/";
    // const DEAFULT_VIDEO = "https://www.youtube-nocookie.com/embed/N6DY_IkzPCI";
    // || DEAFULT_VIDEO
    return <div className="video">
         <iframe
          width="1320"
          height="600"
          src={URL_VIDEO + key }
          title={name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
    </div>;
  }
}

export default Video;
