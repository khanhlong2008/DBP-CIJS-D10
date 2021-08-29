import React, { Component } from "react";
import userDetailinfo from '../API/UserDetails'
import UserDetails from "../Components/UserDetail";
import userDetailRepos from './../API/UserDetailRepos'
class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      repos: [],
    };
  }
  async componentDidMount() {
    const login = this.props.match.params.login;
    try {
      const response = await userDetailinfo.fetchUserDetailinfo(login);
      const responseRepos = await userDetailRepos.fetchUserDetailRepos(login)
      this.setState({
        users: response.data,
        repos: responseRepos.data
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const {users} = this.state;
    const {repos} = this.state
    console.log(users)
    console.log(repos)
    return <div>
        <UserDetails users={users} repos={repos}/>
    </div>;
  }
}

export default UserDetail;
