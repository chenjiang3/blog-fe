import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import combineReducers from './reducers';
import rootSaga from "src/saga/saga";

const sagaMiddleware = createSagaMiddleware();
let store = createStore(combineReducers, applyMiddleware(sagaMiddleware, logger));
sagaMiddleware.run(rootSaga);

export default store;
