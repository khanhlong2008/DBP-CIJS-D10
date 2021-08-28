import axios from "axios";

const baseURL = "https://api.github.com";

const userAPI = {
  fetchUser: (search) => {
    return axios.get(`${baseURL}/search/users?q=${search}`);
  },
};

export default userAPI;
