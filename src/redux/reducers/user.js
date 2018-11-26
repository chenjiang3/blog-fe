import {USER_AUTHOR_INFO_REQ, USER_AUTHOR_INFO_RSP} from "actions/user";

const initState = {
  authorInfo: {
    loading: false,
    data: {}
  },
};

const user = (state = initState, action) => {
  switch (action.type) {
    case USER_AUTHOR_INFO_REQ:
      return {
        ...state,
        authorInfo: {
          ...state.authorInfo,
          loading: true,
        },
      };
    case USER_AUTHOR_INFO_RSP:
      return {
        ...state,
        authorInfo: {
          loading: false,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export default user;