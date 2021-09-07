import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/movie';
const key = '3ba5b9600d3f397ae088ef6cd0efecfb'
const SearchURL = 'https://api.themoviedb.org/3/search/movie?query='
const API = {
    fetchPopularAPI: ()=>{
        return axios.get(`${baseURL}/popular?api_key=${key}&page=6&per_page=30`)
    },
    fetchComingAPI: ()=>{
        return axios.get(`${baseURL}/upcoming?api_key=${key}&page=5`)
    },
    fetchRatedAPI: ()=>{
        return axios.get(`${baseURL}/top_rated?api_key=${key}&page=12`)
    },
    fetchNowPlayingAPI: ()=>{
        return axios.get(`${baseURL}/now_playing?api_key=${key}&page=3`)
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
    // https://api.themoviedb.org/3/genre/movie/list?api_key=3ba5b9600d3f397ae088ef6cd0efecfb//list
    // https://api.themoviedb.org/3/discover/movie?api_key=3ba5b9600d3f397ae088ef6cd0efecfb&with_genres=27&page=3//item
}
// /fCayJrkfRaCRCTh8GqN30f8oyQF.jpg
export default API
