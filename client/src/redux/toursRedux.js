import initialState from "./initialState";
import axios from 'axios';
import { API_URL } from "../config";

/*SELECTORS*/
export const getAllTours = (state) => state.tours;

export const getTourById = (state, tourId) => {
  return state.tours.find((tour) => tour.id === tourId);
}

/* ACTIONS */
const reducerName = 'tours';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

export const DATA_TOURS = createActionName('DATA_TOURS');

/* ACTIONS CREATORS */
export const startRequest = payload => ({ payload, type: START_REQUEST });
export const endRequest = payload => ({ payload, type: END_REQUEST });
export const errorRequest = payload => ({ payload, type: ERROR_REQUEST });


export const fetchDataTours = payload => ({type: DATA_TOURS, payload});

export const loadToursRequest = () => {
  return async (dispatch) => {
    const requestName = DATA_TOURS;
    dispatch(startRequest({ name: requestName }));
    
    try {
      let res = await axios.get(`${API_URL}/tours`);
      dispatch(fetchDataTours(res.data));
      dispatch(endRequest({ name: requestName }));
    } catch (e) {
      dispatch(errorRequest({ name: requestName, error: e.message }));
    }
  };
};

/* REDUCER */
export default function toursReducer(state = initialState, action = {}) {
  switch (action.type) {
    case DATA_TOURS:
      return action.payload;
    default:
      return state;
  }
}