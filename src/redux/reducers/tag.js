import {
  TAG_LIST_REQUEST,
  TAG_LIST_RESPONSE,
} from "actions/tag";

const initState = {
  list: {
    data: [],
    loading: false,
  }
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case TAG_LIST_REQUEST:
      return {
        ...state,
        list: {
          ...state.list,
          loading: true,
        }
      };
    case TAG_LIST_RESPONSE:
      return {
        ...state,
        list: {
          data: action.payload,
          loading: false
        }
      };
    default:
      return state;
  }
}