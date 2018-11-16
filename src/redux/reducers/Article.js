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
};

const article = (state = initState, action) => {
  switch (action.type) {
    case RECEIVE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.articleList,
      };
    case RECEIVE_ARTICLE_DETAIL:
      return {
        ...state,
        article: action.article,
      };
    default:
      return state;
  }
};

export default article;