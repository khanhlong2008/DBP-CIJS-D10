import React, { Component } from "react";
import Search from "../Components/Search";
import Users from "../Components/Users";
import Alert from "../Layouts/Alert";
import UserAPI from "./../API/User";
class SearchUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isShowAlert: false,
      isShowButtonClear: false,
    };
  }
  onFetchUser = async (search) => {
    try {
      if (!search) {
        this.setState({
          isShowAlert: true,
        });
        setTimeout(() => {
          this.setState({
            isShowAlert: false,
          });
        }, 2000);
        return;
      }
      this.setState({
        isLoading: true,
        users: [],
      });
      const response = await UserAPI.fetchUser(search);
      this.setState({
        users: response.data.items,
        isLoading: false,
        isShowButtonClear: true,
      });
      // console.log(response)
    } catch (err) {
      console.log(err);
    }
  };
  onClearUsers = () => {
    this.setState({
      users: [],
      isShowButtonClear: false,
    });
  };
  render() {
    const { users, isLoading, isShowAlert, isShowButtonClear } =
      this.state;
    return (
      <div>
        {isShowAlert && (
          <Alert
            msg="Please enter the username before searching"
            type="danger"
          />
        )}
        <Search
          onFetchUser={this.onFetchUser}
          isShowButtonClear={isShowButtonClear}
          onClearUsers={this.onClearUsers}
        />
        <Users users={users} isLoading={isLoading} />
      </div>
    );
  }
}

export default SearchUser;
