import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import OrderDetail from '../OrderDetail';
import Tables from '../Tables';

import './index.less';

class ChooseTable extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<OrderDetail />
				<Tables />
			</div>
		)
	}
}

export default ChooseTable;