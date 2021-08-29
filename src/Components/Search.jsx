import React, { Component } from "react";
import "./../Styles/Search.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  onSubmitSearchUser = (e) => {
    e.preventDefault();
    this.props.onFetchUser(this.state.search);
  };
  render() {
    var { search } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmitSearchUser}>
          <div className="form-group">
            <label for=""></label>
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search UserName..."
              value={search}
              onChange={this.onSearchChange}
            />
            <button
              type="submit"//type phai la submit
              className="btn btn-secondary size position-relative"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
