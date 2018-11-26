import { all } from 'redux-saga/effects';
import {watchYieldArticleList, watchYieldArticleDetail} from "./article";
import {watchYieldTimeFileList} from './timefile';
import {watchYieldSayList} from './say';
import {watchYieldIncreaseAccess} from "src/saga/article";
import {watchYieldAuthorInfo} from "./user";

export default function *rootSaga() {
  yield all([
    watchYieldArticleList(),
    watchYieldArticleDetail(),
    watchYieldTimeFileList(),
    watchYieldSayList(),
    watchYieldIncreaseAccess(),
    watchYieldAuthorInfo(),
  ]);
}