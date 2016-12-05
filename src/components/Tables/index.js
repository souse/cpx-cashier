import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'antd';

import './index.less';

class Tables extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Row type="flex" justify="end" className="cash-controls">
				<Row type="flex" justify="start" className="cash-control">
					<div className="cashs">
						<ul>
							<li className="cash ctable active">
								<div>
									<span className="title">大厅1号桌</span>
									<span className="posi">6座</span>
									<span className="yang">￥200</span>
									<span className="ltime">11分钟前</span>
								</div>
							</li>
							<li className="cash ctable"><div>2</div></li>
							<li className="cash ctable current"><div>2</div></li>
							<li className="cash ctable"><div>2</div></li>
							<li className="cash ctable ct5"><div>2</div></li>
							<li className="cash ctable"><div>2</div></li>
							<li className="cash ctable"><div>2</div></li>
						</ul>
					</div>
					<Row type="flex" justify="start" className="ob-opreate">
						<Col className="btns" span={16}>
							<Button type="primary btn-hong">开钱箱F8</Button>
							<Button type="primary btn-lan">刷新F3</Button>
							<Button type="primary btn-lan">返回F9</Button>
						</Col>
						<Col className="pagin" span={8}></Col>
					</Row>	
				</Row>
				<div className="ob-change">
					<Col span={24} className="change-common active">全部</Col>
					<Col span={24} className="change-common">大厅</Col>
					<Col span={24} className="change-common">包厢</Col>
					<Col span={24} className="change-common">空闲(10)</Col>
					<Col span={24} className="change-common">占用(15)</Col>
				</div>
			</Row>
		)	
	}
}

export default Tables;
