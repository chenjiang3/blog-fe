import callApi from "src/utils/callApi";

export async function fetchArticleList() {
  return callApi('/api/get-articles');
}