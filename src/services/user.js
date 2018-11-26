import {stringify} from 'qs';
import callApi from "src/utils/callApi";
import {API} from "src/config";

const api = `/${API}/user`;

const authorMobile = '18616708941';

export async function authorInfo() {
  return callApi(`${api}/author-info/${authorMobile}`, {
    method: 'GET',
  })
}

