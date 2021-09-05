import React, { Component } from "react";
import API from "../Utils/Api";

class BackDropHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: [],
    };
  }
  async componentDidMount() {
    try {
      const reponse = await API.fetchPopularAPI();
      this.setState({
        show: reponse.data.results,
      });
    } catch (err) {
      console.log(err);
    }
    const adx = this.state.show[0];
    this.setState({
      show: adx,
    });
    // console.log(this.state)
  }
  render() {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const { show } = this.state;
    return (
      <div className="backDrop">
        <img src={IMG_URL + show.backdrop_path} alt="" />
        <div className="color-overlay">
          <div className="title-overView">
            <img src={IMG_URL + show.poster_path} alt="" />
            <div className="title-ovewiew--item">
            <h1>{show.title}</h1>
            <h6>
             {show.overview}
            </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BackDropHome;
