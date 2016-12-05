import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user';
import menu from './menu';
import orderDetail from './orderDetail';

const rootReducer = combineReducers({
	user, 
	menu, 
	orderDetail,
	routing: routerReducer 
});

export default rootReducer;