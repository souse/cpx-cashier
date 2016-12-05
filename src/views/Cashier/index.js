import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Table, Row, Col, Button } from 'antd';

import * as orderDetail from '../../actions/orderDetail';

import './index.less';

const columns = [
	{
		title: '品名',
		dataIndex: 'name',
		className: 'name',
		width: 110	
	},
	{
		title: '数量',
		dataIndex: 'amount',
		className: 'amount',
		width: 50
	},
	{
		title: '金额(元)',
		dataIndex: 'money',
		className: 'money',
		width: 70
	},
	{
		title: '口味/做法',
		dataIndex: 'remark',
		className: 'remark',
		width: 95
	}
];
const data = [];

for (let i = 0; i < 50; i++) {
	data.push({
		key: i,
		name: `川府口味鸡 ${i}`,
		amount: 'x10份',
		money: `${i}.00`,
		remark: '测试、测试'
	});
}

class Cashier extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<Row type="flex" justify="start" className="cashier-control">
				{this.props.children}
			</Row>
		)
	}
}

const mapStateToProps = state => {
	return {
		orderDetail: state.orderDetail		
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators(orderDetail, dispatch);	
}

export default connect(mapStateToProps, mapDispatchToProps)(Cashier);