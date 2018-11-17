import {stringify} from 'qs';
import callApi from "src/utils/callApi";
import {API} from "src/config";

export async function fetchSayList(payload) {
  return callApi(`/${API}/get-say`, {
    method: 'GET',
  });
}
