/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router-dom";
const MovieItem  =(props)=> {
 
    const IMG_URL = "https://image.tmdb.org/t/p/w500";
    
    const {poster_path,original_title,vote_average,release_date,original_language , id} = props.popular
    console.log(original_title)
    const history = useHistory();
    const onClickToMovieDetail = ()=>{
      history.push(`/${id}`)
    }

    return (
      <>
        <div className="movieItem">
          <img src={IMG_URL + poster_path} onClick={onClickToMovieDetail}></img>
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
export default MovieItem;
