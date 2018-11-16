import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import article from "reducers/Article";

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action),
    article: article(state.article, action),
  }
}