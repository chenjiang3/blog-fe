import {stringify} from 'qs';
import callApi from "src/utils/callApi";
import {API} from "src/config";

const articleApi = `/${API}/article`;

export async function fetchArticleList({pageIndex, pageSize}) {
  const params = {
    pageIndex: pageIndex || 1,
    pageSize: pageSize || 100,
  };
  return callApi(`${articleApi}/list?${stringify(params)}`, {
    method: 'GET',
  });
}

export async function fetchArticleDetail({id}) {
  const params = {
    Id: id || undefined,
  };

  return callApi(`${articleApi}/${id}`, {
    method: 'GET',
  });
}

export async function increaseAccess({id}) {
  return callApi(`${articleApi}/access/${id}`, {
    method: 'PUT',
  });
}