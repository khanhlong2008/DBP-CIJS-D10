import axios from "axios";

const baseURL = "https://api.github.com";
const  userDetailinfo = {
  fetchUserDetailinfo:(login)=>{
    return axios.get(`${baseURL}/users/${login}`)
  }
}
export default userDetailinfo