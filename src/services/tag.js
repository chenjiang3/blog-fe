import {stringify} from 'qs';
import callApi from "src/utils/callApi";
import {API} from "src/config";

const TAG_API = `/${API}/tags`;

export async function tagList() {
  return callApi(`${TAG_API}/list`, {
    method: 'GET'
  });
}
