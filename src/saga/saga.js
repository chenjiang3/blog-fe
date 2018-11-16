import { all } from 'redux-saga/effects';
import {watchYieldArticleList} from "./article";

export default function *rootSaga() {
  yield all([watchYieldArticleList()]);
}