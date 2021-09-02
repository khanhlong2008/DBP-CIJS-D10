import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <form className="search">
          <input type="text" className="form-control"/>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
