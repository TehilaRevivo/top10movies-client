import { combineReducers } from 'redux';
import movieReducer from './movieReducer'

const appReducers = combineReducers({
    movie:movieReducer,
});




export default appReducers;
