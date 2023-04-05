// actions.js
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../types/types.ts';

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = error => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      const response = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&appid=f73cb052bb61af81c2a0a51877978d35',
      );
      console.log(JSON.stringify(response.data));
      dispatch(fetchDataSuccess(JSON.stringify(response.data)));
    } catch (error) {
      console.log(JSON.stringify(error));
      dispatch(fetchDataFailure(error.message));
    }
  };
};
