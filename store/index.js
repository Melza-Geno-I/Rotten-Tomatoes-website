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

    setMovies: (state, value) => {
        state.movies = value
    },
    setMovie: (state, value) => {
      state.movie = value
    },
    setPagination: (state, value) => {
      state.pagination = value
    }
  }
  
  export const actions = {
    fetchMovies ({ commit }) {
      console.log(this);

      this.$axios.get('/trending/movie/week').then((response) => {
          const { page, total_pages, total_results } = response
          commit('set_pagination',{ page, total_pages, total_results } )
          commit('setMovies', response.data.results)
        })
        // console.log(response.data);
        
    },
    fetchMovie ({commit}, movieId) {
      this.$axios.get(`/movie/${movieId}`).then(response => {
        commit('setMovie', response.data)
    })
  },
  searchMovie({commit}, value){
    this.$axios.get(`/search/movie?query=${value}`).then(response => {
      const { page, total_pages, total_results } = response
      commit('set_pagination',{ page, total_pages, total_results } )
      commit('setMovies', response.data.results)
      this.router.push('/result')
    })
  }
}