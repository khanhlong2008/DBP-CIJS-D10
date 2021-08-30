import React, { Component } from "react";
import UserItem from "./UserItem";
import Loading from './Loading'
class Users extends Component {
  render() {
    var { users ,isLoading} = this.props;
    return (
      <>
      <Loading isLoading={isLoading}/>
      <div className="row ">
        {users.map((userItem, index) => {
          return <UserItem key={index} users={userItem} />;
        })}
      </div>
      </>
    );
  }
}

export default Users;
