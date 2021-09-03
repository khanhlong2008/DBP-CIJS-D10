import React, { Component } from "react";
import API from "../Utils/Videos";
import MoviePopular from "./MovieIPopular";
class MovieListPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popular: [],
    };
  }
  async componentDidMount() {
    try {
      const reponsePopular = await API.fetchVideoPopularAPI();
      this.setState({
        popular: reponsePopular.data.results,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { popular } = this.state;
    return (
      <>
        <div className="movieList center">
          {popular.map((popularItem, index) => {
            return <MoviePopular key={index} popular={popularItem} />;
          })}
          ,
        </div>
      </>
    );
  }
}

export default MovieListPopular;
