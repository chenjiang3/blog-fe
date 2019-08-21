import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchArticleList, fetchArticleDetail, increaseAccess} from "src/services/article";
import {FETCH_ARTICLE_LIST, RECEIVE_ARTICLE_LIST, FETCH_ARTICLE_DETAIL} from 'src/redux/actions/article';
import {ARTICLE_ADD_ACCESS, RECEIVE_ARTICLE_DETAIL} from "actions/article";

function *yieldArticleList(action) {
  const { payload } = action;
  const response = yield call(fetchArticleList, payload);
  if (response) {
    yield put({
      type: RECEIVE_ARTICLE_LIST,
      payload: response,
    });
  }
}

function *yieldArticleDetail(action) {
  const {payload} = action;
  const response = yield call(fetchArticleDetail, payload);
  if (response) {
    yield put({
      type: RECEIVE_ARTICLE_DETAIL,
      article: response,
    });
  }
}

function *yieldIncreaseAccess(action) {
  yield call(increaseAccess, action.payload);
}

export function *watchYieldArticleList() {
  yield takeEvery(FETCH_ARTICLE_LIST, yieldArticleList);
}

export function *watchYieldArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL, yieldArticleDetail);
}

export function *watchYieldIncreaseAccess() {
  yield takeEvery(ARTICLE_ADD_ACCESS, yieldIncreaseAccess);
}