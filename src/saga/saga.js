import { all } from 'redux-saga/effects';
import {watchYieldArticleList, watchYieldArticleDetail} from "./article";
import {watchYieldTimeFileList} from './timefile';

export default function *rootSaga() {
  yield all([
    watchYieldArticleList(),
    watchYieldArticleDetail(),
    watchYieldTimeFileList(),
  ]);
}