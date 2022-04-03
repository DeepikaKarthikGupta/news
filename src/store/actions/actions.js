import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  SEARCH_DATA_SUCCESS,
} from "./type";

export function fetchDataRequest() {
  return {
    type: FETCH_DATA_REQUEST
  };
}

export function fetchDataSuccess(articles) {
  return {
    type: FETCH_DATA_SUCCESS,
    articles
  };
}
export function searchDataSuccess(articles) {
  return {
    type: SEARCH_DATA_SUCCESS,
    articles
  };
}


export function fetchDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error }
  };
}