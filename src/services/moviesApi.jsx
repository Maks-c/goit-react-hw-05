import axios from "axios";
const BASE_URL= 'https://api.themoviedb.org/3'
const API_KEY= '6db178e9ee32ba259e031d27905cafe1'

axios.defaults.baseURL= `${BASE_URL}`;

export const getMovies=async ( )=>{
  const response=await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return response.data.results
}

 export const getMovieById=async (id)=>{
  const response=await axios.get(`/movie/${id}?api_key=${API_KEY}&language=en-US`)
   return response.data
 }

 export const getMovieCast=async(id)=>{
  const response=await axios.get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
   return response.data.cast
 }

 export const getReviews=async(id)=>{
   const response=await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`)
   return response.data.results
 }



