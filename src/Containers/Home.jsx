/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import React, { Component } from "react";
import BackDrop from "../Components/BackDrop";
import MovieHomeList from "../Components/MovieHomeList";
import API from "../Utils/Api";
import Search from "./../Components/Search";
import Tab from "./../Components/Tab";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:[],
    };
  }
    async componentDidMount() {
    try {
      const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        show: reponsePopular.data.results,
      });
    } catch (err) {
      console.log(err);
    }

  }
  onfetch = async (action) =>{
    if(action === 'popular'){
      const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        show:reponsePopular.data.results,
      })
    }else if(action === 'coming'){
      const reponseComing = await API.fetchComingAPI();
      this.setState({
        show: reponseComing.data.results,
      })
    }else{
      const reposeRate = await API.fetchRatedAPI();
      this.setState({
        show: reposeRate.data.results,
      })
    }
  }
  render() {
    return (
      <div>
        <BackDrop/>
        <Search />
        <Tab onfetch={this.onfetch} />
        <MovieHomeList  {...this.state}/>
      </div>
    );
  } 
}

export default Home;
