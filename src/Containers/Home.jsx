/* eslint-disable no-self-assign */
/* eslint-disable default-case */
import React, { Component } from "react";
import BackDropHome from "../Components/BackDropHome";
import MovieHomeList from "../Components/MovieHomeList";
import API from "../Utils/Api";
import Search from "./../Components/Search";
import Tab from "./../Components/Tab";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show:[],
      status:"Popular"
    };
  }
    async componentDidMount() {
    try {
      const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        show: reponsePopular.data.results,
        status:"Popular",
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
        status:"Popular"
      })
    }else if(action === 'coming'){
      const reponseComing = await API.fetchComingAPI();
      this.setState({
        show: reponseComing.data.results,
        status:"Up Coming"
      })
    }else{
      const reposeRate = await API.fetchRatedAPI();
      this.setState({
        show: reposeRate.data.results,
        status:"Top Rated"
      })
    }
  }
  onFetchSearch = async (search)=>{
    console.log(search)
    try{
      const reponse = await API.fetchSearchApi(search);
      console.log(reponse)
      this.setState({
        show:reponse.data.results
      })
    }catch(err){
      console.log(err)
    }
    console.log(this.state)
  }
  render() {
    const {history} = this.props
    return (
      <div>
        <BackDropHome/>
        <Search onFetchSearch={this.onFetchSearch}/>
        <Tab onfetch={this.onfetch} />
        <MovieHomeList  {...this.state} history={history}/>
      </div>
    );
  } 
}
export default Home;
