import { createStore, applyMiddleware, compose } from 'redux';

import appReducers from './reducers/appReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(appReducers,composeEnhancers());

window.store = store;
export default store;
