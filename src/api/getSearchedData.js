import APIKey from "../helpers/APIKey";
import { fetchDataError, fetchDataRequest, searchDataSuccess } from "../store/actions/actions"

export default function getSearchedData(searchItem) {
  return dispatch => {
    dispatch(fetchDataRequest());
    fetch(      
      `http://localhost:8000/SearchHeadlines/${searchItem},${APIKey}`
      )
      .then((res) => res.json())
      .then((data) => {
        dispatch(searchDataSuccess(data.articles));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}