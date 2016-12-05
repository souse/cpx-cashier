import React, { Component, PropTypes } from 'react';
import { Form, Input, Button, Row, Col, notification } from 'antd';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../actions/user';

import './index.less';

const FormItem = Form.Item;

const propTypes = {
  user: PropTypes.string,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
};

const contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

class Login extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		const error = nextProps.loginErrors;
      	const isLoggingIn = nextProps.loggingIn;
      	const user = nextProps.user;

      	if (error != this.props.loginErrors && error) {
          	notification.error({
              	message: '登录失败！',
              	description: error
          	});
      	}

      	if (!isLoggingIn && !error && user)  {
          	notification.success({
              	message: '登录成功！',
              	description: '欢迎 ' + user + ' !'
          	});
      	}

      	if (user) {
      		this.context.router.replace('/home');
      	}
	}

	handleSubmit(e) {
		e.preventDefault();

		const data = this.props.form.getFieldsValue();
		this.props.login(data.user, data.password);
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		
		return (
			<Row className="login-row" type="flex" justify="space-around" align="middle">
		        <Col span="8">
		          	<Form horizontal onSubmit={this.handleSubmit} className="login-form">
			            <FormItem
							label='用户名：'
							labelCol={{ span: 6 }}
							wrapperCol={{ span: 14 }}
			            >
			              	{getFieldDecorator('user')(
			                	<Input placeholder='admin' />
			              	)}
			            </FormItem>
			            <FormItem
			              	label='密码：'
			              	labelCol={{ span: 6 }}
			              	wrapperCol={{ span: 14 }}
			            >
			              	{getFieldDecorator('password')(
			                	<Input type='password' placeholder='123456' />
			              	)}
			            </FormItem>
			            <Row>
			              	<Col span='16' offset='6'>
			                	<Button type='primary' htmlType='submit'>确定</Button>
			              	</Col>
			            </Row>
		          	</Form>
		        </Col>
		    </Row>	
		)
	}
}

Login.contextTypes = contextTypes;

Login.propTypes = propTypes;

Login = Form.create()(Login);

const mapStateToProps = (state) => {
	const { user } = state;

	if (user.user) return { user: user.user, loggingIn: user.loggingIn, loginErrors: '' };

	return { user: null, loggingIn: user.loggingIn, loginErrors: user.loginErrors };
}

const mapDispatchToProps = (dispatch) => {
	return {
		login: bindActionCreators(login, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
