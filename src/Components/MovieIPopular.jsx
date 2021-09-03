/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

class MoviePopular extends Component {
  render() {
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    const {poster_path,original_title,vote_average,release_date,original_language,id} = this.props.popular
    return (
      <>
        <div className="movieItem">
          <img src={IMG_URL + poster_path} onClick={this.onShowMovieDetail(id)}></img>
          <div className="movie-info">
            <div className="title-rate">
              <h3 className="cursor">{original_title}</h3>
            </div>
            <div className="language-date">
              <p>language: {original_language}</p>
              <p>{release_date}</p>
              <p className="rate">{vote_average}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  onShowMovieDetail = (id)=>{
    console.log(id)
  }
}

export default MoviePopular;
