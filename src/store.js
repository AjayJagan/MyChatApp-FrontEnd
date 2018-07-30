import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './rootReducer';
import socketMiddleware from './middlewares/socket';

const store = createStore(allReducers, {}, 
    compose(applyMiddleware(
    thunk,socketMiddleware), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;