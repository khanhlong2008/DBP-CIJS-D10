import React, { Component } from "react";
import "./../Styles/Search.css";
import Button from "./Button";
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
    this.setState({
      search: "",
    });
  };
  render() {
    var { search } = this.state;
    var {isShowButtonClear,onClearUsers} = this.props
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
            <Button
              label="Search" color="primary" type="submit"
            />
            {isShowButtonClear && (
              <Button
                label="Clear users"
                color="secondary"
                onClick={onClearUsers}
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
