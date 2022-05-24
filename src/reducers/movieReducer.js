import { ADD_MOVIE, DELETE_MOVIE } from "../actions/movieActions.js";
import movies from "./../data.js";

const initialState = {
  movies: movies,
  appTitle: "IMDB Movie Database"
};

const reducer = (state = initialState, action) => {
  console.log("movie reducer state", state);

  switch (action.type) {
      case DELETE_MOVIE:
      return {
        movies: state.movies.filter((item) => +action.payload !== +item.id)
      };
      case ADD_MOVIE:
      const newMovie = { id: state.movies.length + 1, ...action.payload }

      return {
        ...state,
          movies: [...state.movies, newMovie]
      };
    default:
      console.log('here')
      return state;
    }
};
// console.log("movies", movies);
export default reducer;
