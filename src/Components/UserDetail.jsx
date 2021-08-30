import React from "react";
import "./../Styles/UserDetail.css";
import { useHistory } from "react-router-dom";

const UserDetails = (props) =>{
  const { repos, users } = props;
  // const {login} = users
    const history = useHistory();
    const onBackToHome = ()=>{
      var name = users.login
      history.goBack(`https://api.github.com/users?q=${name}`);
      // 
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
