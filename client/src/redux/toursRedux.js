import axios from 'axios';
import { API_URL } from '../config';
import initialState from './initialState';

// Action Types
const DATA_TOURS = 'app/tours/DATA_TOURS';
const FETCH_SINGLE_TOUR = 'app/tours/FETCH_SINGLE_TOUR';
const START_REQUEST = 'app/tours/START_REQUEST';
const END_REQUEST = 'app/tours/END_REQUEST';
const ERROR_REQUEST = 'app/tours/ERROR_REQUEST';

// Action Creators
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = (error) => ({ type: ERROR_REQUEST, error });
export const fetchDataTours = (payload) => ({ type: DATA_TOURS, payload });
export const fetchSingleTour = (payload) => ({ type: FETCH_SINGLE_TOUR, payload });

// Thunks
export const loadToursRequest = () => async (dispatch) => {
  dispatch(startRequest());
  try {
    const res = await axios.get(`${API_URL}/tours`);
    dispatch(fetchDataTours(res.data));
    dispatch(endRequest());
  } catch (error) {
    dispatch(errorRequest(error.message));
  }
};

export const loadSingleTourRequest = (id) => async (dispatch) => {
  dispatch(startRequest());
  try {
    const res = await axios.get(`${API_URL}/tours/${id}`);
    dispatch(fetchSingleTour(res.data));
    dispatch(endRequest());
  } catch (error) {
    dispatch(errorRequest(error.message));
  }
};

// Reducer
const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_TOURS:
      return {
        ...state,
        tours: action.payload,
      };
    case FETCH_SINGLE_TOUR:
      const updatedTours = state.tours.map((tour) =>
        tour.id === action.payload.id ? action.payload : tour
      );
      if (!updatedTours.some(tour => tour.id === action.payload.id)) {
        updatedTours.push(action.payload);
      }
      return {
        ...state,
        tours: updatedTours,
      };
    default:
      return state;
  }
};

export default toursReducer;

// Selectors
export const getAllTours = (state) => state.tours.tours;
export const getTourById = (state, tourId) => state.tours.tours.find((tour) => tour.id === tourId);
