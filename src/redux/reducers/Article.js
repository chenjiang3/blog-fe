import {
  FETCH_ARTICLE_LIST,
  RECEIVE_ARTICLE_LIST,
  FETCH_ARTICLE_DETAIL,
  RECEIVE_ARTICLE_DETAIL,
} from 'src/redux/actions/article';

const initState = {
  articleList: {
    articles: [],
    total: 0,
  },
  article: {},
  loading: false,
};

const article = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_LIST:
      return {
        ...state,
        loading: true,
      };
    case RECEIVE_ARTICLE_LIST:
      return {
        ...state,
        articleList: {
          ...action.articleList,
          total: action.articleList.length,
        },
        loading: false,
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