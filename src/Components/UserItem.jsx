import React from "react";
import "./../Styles/UserItem.css";
import { useHistory } from "react-router-dom";

const UserItem = (props) => {
  const history = useHistory();
  const onClickToUserDatail = () => {
    history.push(`/users/${login}`)
  };

  const { login, avatar_url } = props.users;
  return (
    <div className="user col-12 col-md-6 col-lg-4 userItem ">
      <img src={avatar_url} alt="" className="img" />
      <p className="user__name">{login}</p>
      <button
        className="mt-2 btn btn-secondary"
        onClick={onClickToUserDatail}
      >
        MORE
      </button>
    </div>
  );
};

export default UserItem;
