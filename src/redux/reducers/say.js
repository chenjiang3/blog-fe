import {
  RECEIVE_SAY_LIST,
} from 'src/redux/actions/say';

const initState = {
  sayList: {
    say: [],
    total: 0,
  },
};

const sayList = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_SAY_LIST:
      return {
        ...state,
        sayList: action.sayList,
      };
    default:
      return state;
  }
};

export default sayList;