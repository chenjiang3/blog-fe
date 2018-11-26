import { call, put, takeEvery } from 'redux-saga/effects';
import {authorInfo} from "src/services/user";
import {USER_AUTHOR_INFO_RSP, USER_AUTHOR_INFO_REQ} from 'src/redux/actions/user';

function *yieldAuthorInfo(action) {
  const response = yield call(authorInfo, {});
  if (response) {
    yield put({
      type: USER_AUTHOR_INFO_RSP,
      payload: response,
    });
  }
}

export function *watchYieldAuthorInfo() {
  yield takeEvery(USER_AUTHOR_INFO_REQ, yieldAuthorInfo);
}
