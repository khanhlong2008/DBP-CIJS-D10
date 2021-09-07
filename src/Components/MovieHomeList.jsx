import React, { Component } from "react";
import MovieItem from "./MovieItem";
class MovieHomeList extends Component {
  render() {
    const {show ,status, history} = this.props
    // console.log(history)
    return (
      <div >
        <h1 className="h1">| {status} </h1>
        <div className="movieList center">
          {show.map((popularItem, index) => {
            return <MovieItem key={index} popular={popularItem} history={history}/>;
          })}
        </div>
      </div>
    );
  }
}

export default MovieHomeList;
