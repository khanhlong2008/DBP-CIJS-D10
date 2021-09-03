import React, { Component } from "react";
import API from "../Utils/Videos";
import MovieComing from "./MovieComing";
class MovieListComing extends Component {
  constructor(props){
    super(props)
    this.state={
      coming:[],
    }
  }
  async componentDidMount (){
    try{
      const reponseComing = await API.fetchVideoComingAPI();
      this.setState({
        coming: reponseComing.data.results,
      })
    }catch(err){
      console.log(err)
    }
  }
  render() {
    const {coming} = this.state
    return (
      <>
      <div className="movieList  center">
        {coming.map((comingItem,index)=>{
          return(
            <MovieComing 
            key={index} 
            coming={comingItem}/>
          )
        })}
        
      </div>
      </>
    );
  }
}

export default MovieListComing;
