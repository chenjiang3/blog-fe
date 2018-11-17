import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchSayList} from "src/services/say";
import {FETCH_SAY_LIST, RECEIVE_SAY_LIST} from 'src/redux/actions/say';

function *yieldSayList(action) {
  const { payload } = action;
  const response = yield call(fetchSayList, {...payload});
  const { say, total } = response || {};
  if (say && total) {
    yield put({
      type: RECEIVE_SAY_LIST,
      sayList: {
        say,
        total,
      },
    });
  }
}

export function *watchYieldSayList() {
  yield takeEvery(FETCH_SAY_LIST, yieldSayList);
}
