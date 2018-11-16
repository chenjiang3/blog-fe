import { all } from 'redux-saga/effects';
import {watchYieldArticleList, watchYieldArticleDetail} from "./article";

export default function *rootSaga() {
  yield all([
    watchYieldArticleList(),
    watchYieldArticleDetail(),
  ]);
}