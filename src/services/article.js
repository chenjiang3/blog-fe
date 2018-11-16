import {stringify} from 'qs';
import callApi from "src/utils/callApi";
import {API} from "src/config";

export async function fetchArticleList() {
  return callApi(`/${API}/get-articles`, {
    method: 'GET',
  });
}

export async function fetchArticleDetail({id}) {
  const params = {
    Id: id || undefined,
  };

  return callApi(`/${API}/get-article?${stringify(params)}`, {
    method: 'GET',
  });
}