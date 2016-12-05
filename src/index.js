import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router';

import store, { history } from './store/configureStore';
import { getCookie } from './utils';


import Login from './views/Login';
import App from './views/App';

import Home from './views/Home';

import Cashier from './views/Cashier';
import ChooseTable from './components/ChooseTable';
import Ordered from './components/Ordered';
import CancelFood from './components/CancelFood';

const validate = (next, replace, callback) => {
	const isLoginedIn = !!getCookie('uid');

	if (!isLoginedIn && next.location.pathname != '/login') {
		replace('/login');
	}
	callback();
}

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/">
				<IndexRedirect to="/home" />
				<Route component={App}>
					<Route path="/home" component={Home} />
					<Route path="/cashier" component={Cashier}>
						{/** 选桌子开单/换桌子 */}
						<Route path="/cashier/choosetable" component={ChooseTable} />
						{/** 点菜 */}
						<Route path="/cashier/ordered" component={Ordered} />
						{/** 退菜 */}
						<Route path="/cashier/cancelfood" component={CancelFood} />
					</Route>
				</Route>
				<Route path="/login" component={Login} />
			</Route>	
		</Router>
	</Provider>,
	document.getElementById('root')
);


