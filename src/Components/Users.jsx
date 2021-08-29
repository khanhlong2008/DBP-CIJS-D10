import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  render() {
    var { users } = this.props;
    return (
      <div className="row ">
        {users.map((userItem, index) => {
          return <UserItem key={index} users={userItem} />;
        })}
      </div>
    );
  }
}

export default Users;
