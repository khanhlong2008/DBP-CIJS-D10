import React, { Component } from "react";
class BackDropDetail extends Component {
  render() {
    const { backDrop } = this.props;
    const IMG_URL = "https://image.tmdb.org/t/p/original";
    return (
      <>
        <div className="backDrop">
          <img src={IMG_URL + backDrop.backdrop_path} alt="" />
          <div className="color-overlay">
            <div className="title-overView">
              <img src={IMG_URL + backDrop.poster_path} alt="" />
              <div className="title-ovewiew--item">
                <h1>{backDrop.title}</h1>
                <h6>{backDrop.overview}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <div className="infoItem">
            <i className="fas fa-clock fa-3x"></i>
            <h3>Run Time : {this.onToggleTime(backDrop.runtime)}</h3>
          </div>
          <div className="infoItem">
            <i className="far fa-money-bill-alt fa-3x"></i>
            <h3>BudGet : ${backDrop.budget}</h3>
          </div>
          <div className="infoItem">
            <i className="fas fa-comment-dollar fa-3x"></i>
            <h3>Revenue : ${backDrop.revenue}</h3>
          </div>
        </div>
      </>
    );
  }
  onToggleTime = (time) => {
    let hour = 0;
    let minute = 0;
    hour = parseInt(time / 60);
    minute = time - hour * 60;
    return `${hour}h ${minute}p`;
  };
}

export default BackDropDetail;
