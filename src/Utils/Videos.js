import axios from 'axios'

const baseURL = 'https://api.themoviedb.org/3/movie/';
const key = '3ba5b9600d3f397ae088ef6cd0efecfb'
const API = {
    fetchVideoPopularAPI: ()=>{
        return axios.get(`${baseURL}popular?api_key=${key}`)
    },
    fetchVideoComingAPI: ()=>{
        return axios.get(`${baseURL}upcoming?api_key=${key}`)
    }
}
export default API