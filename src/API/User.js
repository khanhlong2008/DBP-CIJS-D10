import axios from "axios";

const baseURL = "https://api.github.com";

const userAPI = {
  fetchUser: (search) => {
    return axios.get(`${baseURL}/search/users?q=${search}`);
  },
  fetchSearchUser: ()=>{
    return axios.get(`https://api.github.com/users`)
  }
};
export default userAPI;
