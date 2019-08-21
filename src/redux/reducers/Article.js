import {
  FETCH_ARTICLE_LIST,
  RECEIVE_ARTICLE_LIST,
  FETCH_ARTICLE_DETAIL,
  RECEIVE_ARTICLE_DETAIL,
} from 'src/redux/actions/article';

const initState = {
  articleList: {
    items:[],
    limit: 0,
    offset: 0,
    page: 1,
    total: 0,
  },
  article: {},
  loading: {
    articlesList: false,
  },
};

const article = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_LIST:
      return {
        ...state,
        loading: {
          articlesList: true,
          ...state.loading
        },
      };
    case RECEIVE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.payload,
        loading: {
          articlesList: false,
          ...state.loading,
        },
      };
    case FETCH_ARTICLE_DETAIL:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_ARTICLE_DETAIL:
      return {
        ...state,
        article: action.article,
        loading: false,
      };
    default:
      return state;
  }
};

export default article;