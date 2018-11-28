import { call, put, takeEvery } from 'redux-saga/effects';
import {tagList} from "src/services/tag";
import {TAG_LIST_REQUEST, TAG_LIST_RESPONSE} from 'src/redux/actions/tag';
import {getColor} from "src/config";

function *yieldTagList(action) {
  const rsp = yield call(tagList, action.payload);
  if (rsp) {
    yield put({
      type: TAG_LIST_RESPONSE,
      payload: rsp.map(e => (
        {
          ...e,
          color: getColor(),
        }
      )),
    })
  }
}

export function *watchYieldTagList() {
  yield takeEvery(TAG_LIST_REQUEST, yieldTagList);
}