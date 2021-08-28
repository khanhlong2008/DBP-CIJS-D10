import React, { Component } from "react";
import Search from "../Components/Search";
import Users from "../Components/Users";
import UserAPI from "./../API/User";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  onFetchUser = async (search) => {
    try {
      const response = await UserAPI.fetchUser(search);
      this.setState({
        users: response.data.items,
      });
    } catch (err){
      console.log(err);
    }
  };
  render() {
      const {users}= this.state
    return (
      <div>
        <Search onFetchUser={this.onFetchUser} />
        <Users users={users}/>
      </div>
    );
  }
}

export default Home;
