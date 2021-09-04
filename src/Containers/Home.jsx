/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import React, { Component } from "react";
import MovieHomeList from "../Components/MovieHomeList";
// import API from "../Utils/Api";
import Search from "./../Components/Search";
import Tab from "./../Components/Tab";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // coming: [],
      // rated:[],
      // popular:[],
      status:0,
    };
  }
  onfetch =  (action) =>{
    if(action === 'popular'){
      // const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        // popular:reponsePopular.data.results,
        status:0,
        // rated:null,
        // coming:null,
      })
    }else if(action === 'coming'){
      // const reponseComing = await API.fetchComingAPI();
      this.setState({
        // coming: reponseComing.data.results,
        status:1,
        // popular:null,
        // rated:null,
      })
    }else{
      // const reposeRate = await API.fetchRatedAPI();
      this.setState({
        // rated: reposeRate.data.results,
        status:-1,
        // coming:null,
        // popular:null,
      })
    }
  }

  render() {
    // console.log(this.state)
    const {status} = this.state
    // console.log(status)
    return (
      <div>
        <Search />
        <Tab onfetch={this.onfetch} />
        <MovieHomeList  status={status}/>
      </div>
    );
  } 
}

export default Home;
