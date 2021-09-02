import React, { Component } from "react";
import API from "../Utils/Videos";
import MovieItem from "./MovieItem";
class MovieList extends Component {
  constructor(props){
    super(props)
    this.state={
      popular:[],
      coming:[],
    }
  }
  async componentDidMount (){
    try{
      const reponsePopular = await API.fetchVideoPopularAPI();
      const reponseComing = await API.fetchVideoComingAPI();
      this.setState({
        popular: reponsePopular.data.results,
        coming: reponseComing.data.results,
      })
      console.log(this.state)
    }catch(err){
      console.log(err)
    }
  }
  render() {
    const {popular,coming} = this.state
    return (
      <div className="movieList container">
        
        {popular.map((popularItem,index)=>{
          return(
            <MovieItem 
            key={index} 
            popular={popularItem}/>
          )
        })},
        {/* {coming.map((comingItem,index)=>{
          return(
            <MovieItem 
            key={index} 
            coming={comingItem}/>
          )
        })} */}
      </div>
    );
  }
}

export default MovieList;
