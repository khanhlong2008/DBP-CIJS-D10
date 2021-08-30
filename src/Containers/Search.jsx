import React, { Component } from "react";
import Search from "../Components/Search";
import Users from "../Components/Users";
import UserAPI from "./../API/User";
class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }
  onFetchUser = async (search) => {
    try {
      // this.setState({
      //   isLoading:true,

      // })
      const response = await UserAPI.fetchUser(search);
      this.setState({
        users: response.data.items,
        // isLoading: false,
      });
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    const { users, isLoading } = this.state;
    return (
      <div>
        <Search onFetchUser={this.onFetchUser}  />
        <Users users={users} isLoading={isLoading}/>
      </div>
    );
  }
}

export default SearchUser;
