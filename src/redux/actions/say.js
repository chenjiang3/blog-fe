export const FETCH_SAY_LIST = "FETCH_SAY_LIST";
export const RECEIVE_SAY_LIST = "RECEIVE_SAY_LIST";

export const fetchSayList = payload => {
  return {
    type: FETCH_SAY_LIST,
    payload,
  }
};

