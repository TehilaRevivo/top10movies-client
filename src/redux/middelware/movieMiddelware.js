import axios from 'axios';
import { actions } from '../action/action';


export const getAllMovies = ({ dispatch, getState }) => next => action => {
    if (action.type === 'GET_ALL_MOVIES') {
        dispatch(actions.setLoading(true))
        axios.get(`http://localhost:4000/api/getAllMovies`)
            .then(res => {
                console.log(res);
                dispatch(actions.fillAllMovies(res.data.allMovies))
                dispatch(actions.setLoading(false))

            })
            .catch(err => {
                dispatch(actions.setLoading(false))
                alert('error')
            })
    }
    return next(action);


}
export const removeMovie = ({ dispatch, getState }) => next => action => {
    if (action.type === 'REMOVE_MOVIE') {
        const movieToRemove = action.payload
        dispatch(actions.setLoading(true))
        axios.post(`http://localhost:4000/api/removeMovie/${movieToRemove}`)
            .then(res => {
                dispatch(actions.removeMovieFromStore(getState().movie.movies.findIndex(m => m._id === movieToRemove)))
                dispatch(actions.setLoading(false))

            })
            .catch(error => {
                alert('Error! Movie not deleted, please try again.')
                dispatch(actions.setLoading(false))

            });
    }
    return next(action);
}

export const addMovie = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_MOVIE') {
        dispatch(actions.setLoading(true))

        axios.post(`http://localhost:4000/api/addMovie`, action.payload)
            .then(res => {
                dispatch(actions.addMovieToReducer(res.data.newMovie))
                dispatch(actions.setLoading(false))

            })
            .catch(error => {
                alert('Error! Movie not saved, please try again.')
                dispatch(actions.setLoading(false))

            });
    }
    return next(action);
}
export const editMovie = ({ dispatch, getState }) => next => action => {
    if (action.type === 'EDIT_MOVIE') {
        dispatch(actions.setLoading(true))
        const { indexMovie, detailsMovie, idMovie } = action.payload
        axios.post(`http://localhost:4000/api/editMovie/${idMovie}`, detailsMovie)
            .then(res => {
                dispatch(actions.setLoading(false))
                dispatch(actions.setMovie({ index: indexMovie, movie: detailsMovie }))
            })
            .catch(error => {
                dispatch(actions.setLoading(false))
                alert('Error! The changes were not saved, please try again')

            });
    }
    return next(action);
}