import axios from "axios"

export const state = () => ({
    movies: []
  })
  
  export const getters = {

  }
  
  export const mutations = {

    set_movies: (state, movies) => {
        state.movies = movies
    }
  }
  
  export const actions = {
    getMovies : ({ commit }) =>{
        const apiKey = 'e9299dd3a078cf1dc93cbb605146c606';
        const apiUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;
        axios.get(apiUrl).then(response => {
            commit('set_movies', response.data.results)
        })
    }
  }