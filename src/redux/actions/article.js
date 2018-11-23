export const FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST";
export const RECEIVE_ARTICLE_LIST = "RECEIVE_ARTICLE_LIST";

export const FETCH_ARTICLE_DETAIL = "FETCH_ARTICLE_DETAIL";
export const RECEIVE_ARTICLE_DETAIL = "RECEIVE_ARTICLE_DETAIL";

export const ARTICLE_ADD_ACCESS = 'ARTICLE_ADD_ACCESS';

export const fetchArticleList = (payload) => {
  return {
    type: FETCH_ARTICLE_LIST,
    payload,
  }
};

export const fetchArticleDetail = payload => {
  return {
    type: FETCH_ARTICLE_DETAIL,
    payload,
  }
};