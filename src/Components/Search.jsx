import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="container">
        <form className="search container">
          <input type="text" className="form-control"/>
          <button className="btn btn-info">Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
