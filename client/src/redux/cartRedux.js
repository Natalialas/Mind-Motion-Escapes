import axios from "axios";
import initialState from "./initialState";
import { API_URL } from "../config";

/* SELECTORS */
export const getAllCartItems = (state) => state.cart.cartItems || [];
export const getRequest = (state) => state.cart.requests;
export const getItemById = (state, itemId) => state.cart.cartItems.find((item) => item.id === itemId);

/* ACTIONS */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

const LOAD_ALL_ITEMS = createActionName('LOAD_ALL_ITEMS');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const UPDATE_CART = createActionName('UPDATE_CART');
const CLEAR_CART = createActionName('CLEAR_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

/* ACTIONS CREATORS */
export const loadAllItems = (payload) => ({ type: LOAD_ALL_ITEMS, payload });
export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const updateCart = (payload) => ({ type: UPDATE_CART, payload });
export const removeFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
export const clearCart = () => ({ type: CLEAR_CART });

export const startRequest = (payload) => ({ payload, type: START_REQUEST });
export const endRequest = (payload) => ({ payload, type: END_REQUEST });
export const errorRequest = (payload) => ({ payload, type: ERROR_REQUEST });

export const loadCartItemsRequest = () => {
  return async (dispatch) => {
    const requestName = LOAD_ALL_ITEMS;
    dispatch(startRequest({ name: requestName }));

    try {
      let res = await axios.get(`${API_URL}/cartitems`, {
        params: {
          include: {
            tour: true
          }
        }
      });
      dispatch(loadAllItems(res.data));
      dispatch(endRequest({ name: requestName }));
    } catch (e) {
      dispatch(errorRequest({ name: requestName, error: e.message }));
    }
  };
};

export const addToCartRequest = (item) => {
  return async (dispatch, getState) => {
    dispatch(startRequest({ name: ADD_TO_CART }));

    try {
      const { cartItems } = getState().cart;
      
      const existingProductIndex = cartItems.findIndex(product => product.tour.id === item.id);

      if (existingProductIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingProductIndex] = {
          ...updatedCartItems[existingProductIndex],
          numberOfPeople: updatedCartItems[existingProductIndex].numberOfPeople + 1,
        };

        await axios.put(`${API_URL}/cartitems/${updatedCartItems[existingProductIndex].id}`, {
          numberOfPeople: updatedCartItems[existingProductIndex].numberOfPeople,
          price: updatedCartItems[existingProductIndex].price,
          tourId: updatedCartItems[existingProductIndex].tour.id,
        });

        dispatch(updateCart(updatedCartItems));
      } else {
        const res = await axios.post(`${API_URL}/cartitems`, {
          numberOfPeople: 1,
          price: item.price,
          tourId: item.id,
        });
        
        const newCartItem = {
          id: res.data.id,
          tour: item,
          numberOfPeople: 1,
          price: item.price,
        };
        dispatch(addToCart(newCartItem));
      }

      dispatch(endRequest({ name: ADD_TO_CART }));
    } catch (e) {
      dispatch(errorRequest({ name: ADD_TO_CART, error: e.message }));
    }
  };
};


export const updateCartItemRequest = (existingItem) => {
  return async (dispatch) => {
    dispatch(startRequest({ name: UPDATE_CART }));

    try {
      const res = await axios.put(`${API_URL}/cartitems/${existingItem.id}`, {
        numberOfPeople: 1,
        price: existingItem.price,
        tourId: existingItem.id,
      });
      dispatch(updateCart(existingItem));
      dispatch(endRequest({ name: UPDATE_CART }));
    } catch (e) {
      dispatch(errorRequest({ name: UPDATE_CART, error: e.message }));
    }
  };
};

export const removeFromCartRequest = (id) => {
  return async (dispatch) => {
    const requestName = REMOVE_FROM_CART;
    dispatch(startRequest({ name: requestName }));

    try {
      await axios.delete(`${API_URL}/cartitems/${id}`);
      dispatch(removeFromCart(id));
      dispatch(endRequest({ name: requestName }));
    } catch (e) {
      dispatch(errorRequest({ name: requestName, error: e.message }));
    }
  };
};

/* REDUCER */
const cartReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_ALL_ITEMS:
      return { ...state, cartItems: action.payload };
    case ADD_TO_CART:
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case UPDATE_CART:
      const updatedItems = state.cartItems.map(item =>
        item.id === action.payload.id ? action.payload : item
      );
      return { ...state, cartItems: updatedItems };
    case REMOVE_FROM_CART:
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case START_REQUEST:
      return { ...state, requests: { ...state.requests, [action.payload.name]: { pending: true, error: null, success: false } } };
    case END_REQUEST:
      return { ...state, requests: { ...state.requests, [action.payload.name]: { pending: false, error: null, success: true } } };
    case ERROR_REQUEST:
      return { ...state, requests: { ...state.requests, [action.payload.name]: { pending: false, error: action.payload.error, success: false } } };
    default:
      return state;
  }
};

export default cartReducer;
