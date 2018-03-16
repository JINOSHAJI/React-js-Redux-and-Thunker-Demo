import * as  actionType from './actionType';
/*Action Handler */
export const addMovie = (title,releaseYear) => {
    console.log('Title : '+title);
    return dispatch => {
         dispatch(movieLoading());
       const movieData = {
                title: title,
                releaseYear: releaseYear,
        };
     return fetch("https://react-native-http.firebaseio.com/Movies.json", {
                method: "POST",
                body: JSON.stringify(movieData)
    })
   .catch(err => {
            console.log(err);
            alert("Something went wrong, please try again!");
            dispatch(movieLoadded());
           // dispatch(uiStopLoading());
     })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
           dispatch(movieLoadded());
           dispatch(getMovies());
        });
    };
};


export const getMovies = () => {
  
    return dispatch => {
        console.log('loading movie');
        dispatch(movieLoading());
        return fetch('https://react-native-http.firebaseio.com/Movies.json')
          .then((response) => response.json())
          .then((parsedRes) => {
            const movies = [];
            for (let key in parsedRes) {
                movies.push({
                    ...parsedRes[key],
                    key: key
                });
                console.log(movies);
            }
            dispatch(setMovies(movies));
            dispatch(movieLoadded());
          })
          .catch((error) =>{
            console.error(error);
          });

        };
};


export const setMovies = movies => {
    return {
        type:  actionType.SET_MOVIES,
        movies:movies
    };
};

export const movieLoadded =() =>{
    return {
        type:actionType.MOVIE_LOADED,
        isLoading:false,
    }
}

export const setMovieTitle =(title) =>{
    return {
        type:actionType.SET_MOVIE_TITLE,
        movieTitle:title,
    }
}

export const setMovieReleaseYear =(year) =>{
    return {
        type:actionType.SET_MOVIE_RELEASE_YEAR,
        movieReleaseYear:year,
    }
}
export const movieLoading =() =>{
    return {
        type:actionType.MOVIE_LOADING,
        isLoading:true,
    }
}