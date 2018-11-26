import counter from './reducers/counter';
import userInfo from './reducers/userInfo';
import article from "reducers/Article";
import timeFile from "reducers/timeFile";
import sayList from "reducers/say";
import user from 'reducers/user';

export default function combineReducers(state = {}, action) {
  return {
    counter: counter(state.counter, action),
    userInfo: userInfo(state.userInfo, action),
    article: article(state.article, action),
    timeFile: timeFile(state.timeFile, action),
    sayList: sayList(state.sayList, action),
    user: user(state.user, action),
  }
}