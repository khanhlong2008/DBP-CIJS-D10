import React, { Component } from "react";
import API from "../Utils/Api";

class BackDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show:[],
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
  }
  render() {
    // const IMG_URL = "https://image.tmdb.org/t/p/w500";
    // const{show} = this.state
    return <div className="backDrop">
        {/* <img src={IMG_URL + show.backdrop_path} alt="" /> */}
        </div>;
  }
}

export default BackDrop;
