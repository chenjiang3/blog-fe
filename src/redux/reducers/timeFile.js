import {
  RECEIVE_TIME_FILE_LIST,
} from 'src/redux/actions/timefile';

const initState = {
  timeFileList: {
    articles: [],
    total: 0,
  },
};

const timeFile = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_TIME_FILE_LIST:
      return {
        ...state,
        timeFileList: action.timeFileList,
      };
    default:
      return state;
  }
};

export default timeFile;