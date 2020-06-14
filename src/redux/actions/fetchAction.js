import * as types from "./types";
import axios from "axios";


export function fetchError(payload) {
  return { type: types.FETCH_ERROR, payload };
}
export function fetchSuccess(payload) {
  return { type: types.FETCH_SUCCESS, payload };
}

export const fetchTable = () => {
    return dispatch => {
      dispatch({type: types.FETCH_LOADING})
      return axios
        .get('https://sp.plusmore.com/api/queries')
        .then(response => {
          console.log(response);
          dispatch(fetchSuccess(response.data));
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            dispatch(fetchError(error.response.data));
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
            throw error;
          }
        });
    };
  };