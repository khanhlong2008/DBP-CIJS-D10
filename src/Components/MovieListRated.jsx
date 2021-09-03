import React, { Component } from "react";
import API from "../Utils/Videos";
import MovieRated from "./MovieRated";
class MovieListRated extends Component {
  constructor(props){
    super(props)
    this.state={
      popular:[],
      coming:[],
      rated:[],
    }
  }
  async componentDidMount (){
    try{
      const reponsePopular = await API.fetchVideoPopularAPI();
      const reponseComing = await API.fetchVideoComingAPI();
      const reponseRated = await API.fetchVideoRatedAPI();
      this.setState({
        popular: reponsePopular.data.results,
        coming: reponseComing.data.results,
        rated: reponseRated.data.results
      })
      // console.log(this.state)
    }catch(err){
      console.log(err)
    }
  }
  render() {
    const {rated} = this.state
    return (
      <>
      <div className="movieList center">
         {rated.map((ratedItem,index)=>{
          return(
            <MovieRated 
            key={index} 
            rated={ratedItem}/>
          )
        })}
      </div>
      </>
    );
  }
}

export default MovieListRated;
