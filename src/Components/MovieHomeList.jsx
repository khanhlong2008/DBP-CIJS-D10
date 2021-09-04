import React, { Component } from "react";
import MovieItem from "./MovieItem";
class MovieHomeList extends Component {
  render() {
    const {show} = this.props
    return (
      <div className="contaner">
        <div className="movieList center">
          {show.map((popularItem, index) => {
            return <MovieItem key={index} popular={popularItem} />;
          })}
        </div>
      </div>
    );
  }
}

export default MovieHomeList;
