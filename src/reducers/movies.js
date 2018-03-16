import * as actionTypes from '../actions/actionType';

let initiaMoviesState ={
  movieTitle:'',
  releaseYear:'',
    movies:[],
    isLoading:true,
}
const movieReducer= (state=initiaMoviesState, action) => {
     switch(action.type){
      case actionTypes.SET_MOVIE_TITLE:
      return {
        ...state,
        movieTitle: action.movieTitle,
        isLoading:false,
      };
      case actionTypes.SET_MOVIE_RELEASE_YEAR:
      return {
        ...state,
        releaseYear: action.movieReleaseYear,
        isLoading:false,
      };
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        isLoading:false,
      };
      case actionTypes.MOVIE_LOADED:
      return {
        ...state,
        isLoading: false
      };
      case actionTypes.MOVIE_LOADING:
      return {
        ...state,
        isLoading: true
      };
        default :
         return state;
     }
}

export default movieReducer;