import React, { Component } from "react";
import "./../Styles/UserDetail.css";

class UserDetails extends Component {
  render() {
    const { repos, users } = this.props;
    return (
      <div className="container">
        <div className="userInfo">
          <img
            src={users.avatar_url}
            alt=""
          />
          <p>
            <h6>USERNAME:</h6>
            {users.login}
          </p>
        </div>
        <h4>REPOSITOREIS</h4>
        <div className="userRepos">
          {repos.map((reposItem, index) => {
            return (
              <div className="repoItem" key={index}>
                {reposItem.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserDetails;
