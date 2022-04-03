import APIKey from "../helpers/APIKey";
import { fetchDataError, fetchDataRequest, fetchDataSuccess } from "../store/actions/actions"

export default function fetchAllHealines() {
  return dispatch => {
    dispatch(fetchDataRequest());
    fetch(      
      `http://localhost:8000/TopHeadlines/${APIKey}`)
      .then((res) => res.json())
      .then((data) => {        
        dispatch(fetchDataSuccess(data.articles));
      })
      .catch(error => {
        dispatch(fetchDataError(error));
      });
  };
}