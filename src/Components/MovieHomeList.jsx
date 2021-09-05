import React, { Component } from "react";
import MovieItem from "./MovieItem";
class MovieHomeList extends Component {
  render() {
    const {show ,status} = this.props
    return (
      <div >
        <h1 className="h1">| {status} </h1>
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
