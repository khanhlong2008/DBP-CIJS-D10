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
      show: [],
      status: "Popular",
    };
  }
  async componentDidMount() {
    try {
      const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        show: reponsePopular.data.results,
        status: "Popular",
      });
    } catch (err) {
      console.log(err);
    }
  }
  onfetch = async (action) => {
    if (action === "popular") {
      const reponsePopular = await API.fetchPopularAPI();
      this.setState({
        show: reponsePopular.data.results,
        status: "Popular",
      });
    } else if (action === "coming") {
      const reponseComing = await API.fetchComingAPI();
      this.setState({
        show: reponseComing.data.results,
        status: "Up Coming",
      });
    } else if (action === "nowPlaying") {
      const reponseNowPlaying = await API.fetchNowPlayingAPI();
      this.setState({
        show: reponseNowPlaying.data.results,
        status: "Now playing",
      });
    } else {
      const reposeRate = await API.fetchRatedAPI();
      this.setState({
        show: reposeRate.data.results,
        status: "Top Rated",
      });
    }
  };
  onFetchSearch = async (search) => {
    // console.log(search);
    try {
      const reponse = await API.fetchSearchApi(search);
      console.log(reponse);
      this.setState({
        show: reponse.data.results,
      });
    } catch (err) {
      console.log(err);
    }
    console.log(this.state);
  };
  onFetchLoadMore = async (page) => {
    if (this.state.status === "Popular") {
      const reponsePopular = await API.fetchMorePopular(page);
      this.setState({
        show: reponsePopular.data.results,
      });
    } else if (this.state.status === "Coming") {
      const reponseComing = await API.fetchMoreComing(page);
      this.setState({
        show: reponseComing.data.results,
      });
    } else if (this.state.status === "Now Playing") {
      const reponseNowPlaying = await API.fetchMoreNow(page);
      this.setState({
        show: reponseNowPlaying.data.results,
      });
    } else {
      const reposeRate = await API.fetchMoreRated(page);
      this.setState({
        show: reposeRate.data.results,
      });
    }

  };
  render() {
    const { history } = this.props;
    return (
      <div>
        <BackDropHome />
        <Search onFetchSearch={this.onFetchSearch} />
        <Tab onfetch={this.onfetch} />
        <MovieHomeList
          {...this.state}
          history={history}
          onFetchLoadMore={this.onFetchLoadMore}
        />
      </div>
    );
  }
}
export default Home;
