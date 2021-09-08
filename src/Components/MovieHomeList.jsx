import React, { Component } from "react";
import MovieItem from "./MovieItem";
class MovieHomeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }
  render() {
    const { page } = this.state;
    const { show, status, history } = this.props;
    var BackPage =
      page > 1 ? (
        <button
          className="custom-btn btn-9"
          onClick={() => this.onshowBackPage(page)}
        >
          Back
        </button>
      ) : (
        ""
      );
    return (
      <>
        <h1 className="h1">| {status} </h1>
        <div className="movieList center">
          {show.map((popularItem, index) => {
            return (
              <MovieItem key={index} popular={popularItem} history={history} />
            );
          })}
        </div>
        <div className="btn-loadmore">
        {BackPage}
          <button
            className="custom-btn btn-9"
            onClick={() => this.onshowNextPage(page)}
          >
            Next
          </button>
         
        </div>
      </>
    );
  }
  onshowNextPage = (page) => {
    let nextPage = 1;
    let result = null;
    result = page + nextPage;
    this.setState({
      page: result,
    });
    this.props.onFetchLoadMore(this.state.page);
  };
  onshowBackPage = (page) => {
    let nextPage = 1;
    let result = "";
    if (page > 0) {
      result = page - nextPage;
      this.setState({
        page: result,
      });
    }

    this.props.onFetchLoadMore(this.state.page);
  };
}

export default MovieHomeList;
