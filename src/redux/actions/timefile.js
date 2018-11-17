export const FETCH_TIME_FILE_LIST = "FETCH_TIME_FILE_LIST";
export const RECEIVE_TIME_FILE_LIST = "RECEIVE_TIME_FILE_LIST";

export const fetchTimeFileList = (payload) => {
  return {
    type: FETCH_TIME_FILE_LIST,
    payload,
  }
};
