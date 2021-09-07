import React, { Component } from "react";

class BackDropHomeItem extends Component {
  render() {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const { item } = this.props;
    return (
      <div className="backDropHomeItem">
        <img src={IMG_URL + item.backdrop_path} alt="" className="backDropHomeItemImg"/>
        {/* <h3>{item.title}</h3> */}
         <div className="color-overlay1">
          <div className="title-overView1">
            <div className="title-ovewiew--item">
            <h1>{item.title}</h1>
            <p>
             {item.overview}
            </p>
            </div>
          </div>
        </div>
      </div>
     
    );
  }
}

export default BackDropHomeItem;
