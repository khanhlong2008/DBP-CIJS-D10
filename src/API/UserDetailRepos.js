import axios from "axios";

const baseURL = "https://api.github.com";
const  userDetailRepos = {
  fetchUserDetailRepos:(login)=>{
    return axios.get(`${baseURL}/users/${login}/repos`)
  }
}
export default userDetailRepos