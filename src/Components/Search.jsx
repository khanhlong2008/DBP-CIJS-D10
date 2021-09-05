import React, { Component } from "react";

class Search extends Component {
  constructor(props){
    super(props)
    this.state={
      search:"",
    }
  }
  componentDidUpdate(prevProps, prevstate){
    if(prevstate.search !== this.state.search){
      this.props.onFetchSearch(this.state.search)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.search !== this.state.search) {
      return true;
    }
    return false;
  }
  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  // onSubmitSearch = e =>{
  //   e.preventDefault();
  //   this.props.onFetchSearch(this.state.search)
  //   this.setState({
  //     search: "",
  //   });
  // }
  render() {
    const {search}= this.state
    return (
      <div className="container">
        <form className="search container" >
        {/* onSubmit={this.onSubmitSearch} */}
          <input 
          type="text" 
          className="form-control"
          value={search}
          name="search"
          placeholder="Search Movie..."
          onChange={this.onSearchChange}
          />
          {/* <button className="btn btn-info">Search</button> */}
        </form>
      </div>
    );
  }
}

export default Search;
