import produce from 'immer'
import createReducer from './reducerUtils'

const initialState = {
  movies: [],
  loading: false,
};

const movieReducer = {
  fillAllMovies(state, action) {
    state.movies = action.payload;
  },
  addMovieToReducer(state, action) {
    const movie = action.payload;
    state.movies.push(movie);
  },

  removeMovieFromStore(state, action) {
    state.movies.splice(action.payload, 1)
  },
  setMovie(state, action) {
    const { index, movie } = action.payload
    state.movies[index] = movie
  },
  setLoading(state, action) {
    state.loading= action.payload
  }
};

export default produce((state, action) => createReducer(state, action, movieReducer), initialState);