import { createStore, applyMiddleware, compose } from 'redux';
import { getAllMovies, removeMovie, addMovie,editMovie } from './middelware/movieMiddelware';

import appReducers from './reducers/appReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers,
    composeEnhancers(
        applyMiddleware(
            getAllMovies,
            removeMovie,
            addMovie,
            editMovie)
    ));

window.store = store;
export default store;
