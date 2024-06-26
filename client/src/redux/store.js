import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import initialState from './initialState';
import toursReducer from './toursRedux';
import cartReducer from './cartRedux';
import ordersReducer from './orderRedux';

const subreducers = {
  tours: toursReducer,
  cart: cartReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export default store;