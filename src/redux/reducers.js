import article from "reducers/Article";
import timeFile from "reducers/timeFile";
import sayList from "reducers/say";
import user from 'reducers/user';
import tag from 'reducers/tag';

export default function combineReducers(state = {}, action) {
  return {
    article: article(state.article, action),
    timeFile: timeFile(state.timeFile, action),
    sayList: sayList(state.sayList, action),
    user: user(state.user, action),
    tag: tag(state.tag, action),
  }
}