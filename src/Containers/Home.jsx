import React, { Component } from "react";
import userAPI from "../API/User";
import Users from "./../Components/Users";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
     
    };
  }
  async componentDidMount() {
    try {
      const reponse = await userAPI.fetchSearchUser();
      this.setState({
        users: reponse.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    const { users } = this.state;
    return (
      <div className="mt-3">
        <Users users={users}/>
      </div>
    );
  }
}

export default Home;
