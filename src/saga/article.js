import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchArticleList, fetchArticleDetail} from "src/services/article";
import {FETCH_ARTICLE_LIST, RECEIVE_ARTICLE_LIST, FETCH_ARTICLE_DETAIL} from 'src/redux/actions/article';
import {RECEIVE_ARTICLE_DETAIL} from "actions/article";

function *yieldArticleList(action) {
  const { payload } = action;
  const response = yield call(fetchArticleList, payload);
  const { articles, total } = response || {};
  if (articles && total) {
    yield put({
      type: RECEIVE_ARTICLE_LIST,
      articleList: {
        articles,
        total,
      },
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

export function *watchYieldArticleList() {
  yield takeEvery(FETCH_ARTICLE_LIST, yieldArticleList);
}

export function *watchYieldArticleDetail() {
  yield takeEvery(FETCH_ARTICLE_DETAIL, yieldArticleDetail);
}