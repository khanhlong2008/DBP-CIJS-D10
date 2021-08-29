import React, { Component } from "react";
import "./../Styles/UserDetail.css";
import { useHistory } from "react-router-dom";

const UserDetails = (props) =>{
  const { repos, users } = props;

    const history = useHistory();
    const onBackToHome = ()=>{
      history.goBack(`https://api.github.com/search/users?q=${users.login}`)
    }
    return (
      <div className="container">
        <input 
        class="btn btn-secondary" 
        type="button" 
        value="Back to home"
        onClick={onBackToHome}
        />
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

export default UserDetails;
