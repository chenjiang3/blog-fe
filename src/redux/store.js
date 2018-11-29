import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import combineReducers from './reducers';
import rootSaga from "src/saga/saga";

const sagaMiddleware = createSagaMiddleware();
let middleWares = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleWares = [...middleWares, logger];
}
let store = createStore(combineReducers, applyMiddleware(...middleWares));
sagaMiddleware.run(rootSaga);

export default store;
