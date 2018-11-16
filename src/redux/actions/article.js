export const FETCH_ARTICLE_LIST = "FETCH_ARTICLE_LIST";
export const RECEIVE_ARTICLE_LIST = "RECEIVE_ARTICLE_LIST";

export const fetchArticleList = (payload) => {
  return {
    type: FETCH_ARTICLE_LIST,
    payload,
  }
};