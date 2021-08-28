import React, { Component } from "react";
import './../Styles/UserItem.css'
class UserItem extends Component {
  render() {
    // const { login, avatar_url } = this.props.users;
    // console.log()
    return (
        <div class="user col-12 col-md-6 col-lg-4 colunm">
          <img src=""alt="" className="img" />
          <p className="user__name"></p>
          <button className="mt-2 btn btn-secondary">MORE</button>
        </div>
    
    );
  }
}

export default UserItem;
