import { createStore, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
//import thunkMiddleware from 'redux-thunk';

import promiseMiddleware from '../middlewares/promiseMiddleware';
import rootReducer from '../reducers';

const initialState = {};

/**
const createStoreWithMiddleware = applyMiddleware(
	thunkMiddleware,
	promiseMiddleware({ promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR'] })
)(createStore);

const store = createStoreWithMiddleware(rootReducer, initialState);
**/
const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;