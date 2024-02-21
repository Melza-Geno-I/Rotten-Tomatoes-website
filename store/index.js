export const state = () => ({
    movies: [],
    movie:null,
    pagination:null
  })
  
  export const getters = {
    getMovies(state){
      return state.movies
    },
    getData(state){
      return state.movie
    }
  }
  
  export const mutations = {

    set_movies: (state, value) => {
        state.movies = value
    },
    set_movie: (state, value) => {
      state.movie = value
    },
    set_pagination: (state, value) => {
      state.pagination = value
    }
  }
  
  export const actions = {
    fetchMovies ({ commit }) {
      console.log(this);

      this.$axios.get('/trending/movie/week').then((response) => {
          const { page, total_pages, total_results } = response
          commit('set_pagination',{ page, total_pages, total_results } )
          commit('set_movies', response.data.results)
        })
        // console.log(response.data);
        
    },
    fetchMovie ({commit}, movieId) {
      this.$axios.get(`/movie/${movieId}`).then(response => {
        commit('set_movie', response.data)
    })
  }
}