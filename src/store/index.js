import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import DATA from '../constants/data';

const store = createStore(
    rootReducer,
    { allDevices: DATA },
    applyMiddleware(logger)
);

export default store;
