import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchArticleList} from "src/services/article";
import {FETCH_TIME_FILE_LIST, RECEIVE_TIME_FILE_LIST} from 'src/redux/actions/timefile';

function *yieldTimeFileList(action) {
  const { payload } = action;
  const response = yield call(fetchArticleList, {...payload, timeFile: true});
  const { articles, total } = response || {};
  if (articles && total) {
    yield put({
      type: RECEIVE_TIME_FILE_LIST,
      timeFileList: {
        articles,
        total,
      },
    });
  }
}

export function *watchYieldTimeFileList() {
  yield takeEvery(FETCH_TIME_FILE_LIST, yieldTimeFileList);
}
