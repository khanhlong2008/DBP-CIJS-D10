import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/movie';
const key = '3ba5b9600d3f397ae088ef6cd0efecfb'
const SearchURL = 'https://api.themoviedb.org/3/search/movie?query='
const API = {
    fetchPopularAPI: ()=>{
        return axios.get(`${baseURL}/popular?api_key=${key}`)
    },
    fetchComingAPI: ()=>{
        return axios.get(`${baseURL}/upcoming?api_key=${key}`)
    },
    fetchRatedAPI: ()=>{
        return axios.get(`${baseURL}/top_rated?api_key=${key}`)
    },
    fecthIdDetail: (id)=>{
        return axios.get(`${baseURL}/${id}?api_key=${key}`)
    },
    fecthActorDetail: (id)=>{
        return axios.get(`${baseURL}/${id}/credits?api_key=${key}`)
    }, 
    fetchSearchApi:(search)=>{
        return axios.get(`${SearchURL}${search}&api_key=${key}`)
    },
    fetchVideoAPI:(id)=>{
        return axios.get(`${baseURL}/${id}/videos?api_key=${key}`)
    }
    // (BASE_URL + "/movie/" + id + "/videos?" + API_KEY)
    // https://www.youtube.com/watch?v=6nqKBKw7bDA
}
export default API