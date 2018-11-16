import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchArticleList} from "src/services/article";
import {FETCH_ARTICLE_LIST, RECEIVE_ARTICLE_LIST} from 'src/redux/actions/article';

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

export function *watchYieldArticleList() {
  yield takeEvery(FETCH_ARTICLE_LIST, yieldArticleList);
}