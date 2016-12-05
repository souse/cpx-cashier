import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Table, Row, Col, Button } from 'antd';

import './index.less';

class OrderDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			yScroll: window.innerHeight - 486
		}
		this.handleResize = this.handleResize.bind(this);
	}

	componentDidMount() {
		window.addEventListener('resize', this.handleResize);
	}

	handleResize() {
		this.setState({yScroll: window.innerHeight - 486});
	}

	render() {
		return (
			<div className="menu">
				<h5>
					NO.TJ1021-20161106-0052
					<div className="menu-batch">批量处理</div>
				</h5>
				<h2 className="menu-table-position">大厅3号桌</h2>
				<div className="menu-table-detail">
					<h4>消费明细单</h4>
					<div className="from-control">
						<Row className="mb-d" type="flex" justify="space-between">
							<Col span={12}>
								<label>服务：</label>002/王文正
							</Col>
							<Col span={12}>
								<label>渠道：</label>店内
							</Col>
						</Row>
						<Row className="mb-d" type="flex" justify="space-between">
							<Col span={12}>
								<label>人数：</label>4人
							</Col>
							<Col span={12}>
								<label>时间：</label>2016/10/12 14-57
							</Col>
						</Row>
						<Row type="flex" justify="space-between">
							<Col span={24}>
								<label>备注：</label>客人是回民，饭要清真。
							</Col>	
						</Row>
					</div>
				</div>	
				<div className="menu-table-foods">
					<Table columns={this.props.columns} pagination={false} dataSource={this.props.data} scroll={{ y: this.state.yScroll }} />
				</div>
				<div className="menu-total">
					<Row type="flex" justify="space-between">
						<Col className="tol-d" span={24}>
							合计菜品：<span>20</span>项	
						</Col>
						<Col className="tol-d" span={24}>
							消费金额：<span>810.00</span>元	
						</Col>
						<Col className="tol-d" span={24}>
							折扣金额：<span>0.00</span>元	
						</Col>
						<Col className="tol-dr" span={24}>
							应收金额：<span className="real-m">810.00</span>元	
						</Col>
					</Row>
				</div>
				<div className="menu-opreate">
					<Row type="flex" justify="space-between">
						<Col className="op op-billing" span={6}>1</Col>
						<Col className="op op-order" span={6}>2</Col>
						<Col className="op op-change" span={6}>3</Col>
						<Col className="op op-printf" span={6}>4</Col>
					</Row>
				</div>
			</div>
		)
	}
}

export default OrderDetail;