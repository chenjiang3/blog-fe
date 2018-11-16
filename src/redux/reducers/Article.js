import {
  FETCH_ARTICLE_LIST,
  RECEIVE_ARTICLE_LIST,
} from 'src/redux/actions/article';

const initState = {
  articleList: {
    articles: [],
    total: 0,
  },
};

const article = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ARTICLE_LIST:
      return state;
    case RECEIVE_ARTICLE_LIST:
      return {
        ...state,
        articleList: action.articleList,
      };
    default:
      return state;
  }
};

export default article;