import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

//import { getAllMenu, updateNavPath } from '../../actions/menu'

import './index.less';

const defaultProps = {
  items: [
	  	{ key: 1, name: '收银', icon: 'user', path: '/cashier/choosetable' },
	    { key: 2, name: '账单', icon: 'laptop', path: '/bill' },
	    { key: 3, name: '统计', icon: 'notification', path: '/statistics' },
	    { key: 4, name: '更多', icon: 'ellipsis', path: '/more' }
    ]
};
const propTypes = { items: PropTypes.array };

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = { activeKey: '' };
		this.menuClickHandle = this.menuClickHandle.bind(this);
	}

	componentDidMount() {
		//this.props.getAllMenu();
	}

	menuClickHandle(item) {
		this.setState({ activeKey: item.path });
		this.context.router.replace(item.path);
	}

	render() {
		const { items } = this.props;
		let { router } = this.context;
	    let activeKey = this.state.activeKey;
	    const menu = items.map((item) => {
	    	if(item.path && router.isActive(item.path)) {
	    		activeKey = item.path;
	    	}
	    	return (
	    		<li 
	    			className={activeKey == item.path ? 'ant-menu-item active' : 'ant-menu-item'} 
	    			key={item.key}
	    			onClick={ () => this.menuClickHandle(item) } 
	    		>
		          	<Icon type={item.icon} />
		          	<Link className="nav-a" to={item.url}>{item.name}</Link>
		        </li>	
	    	)
	    });

		return (
			<aside className="ant-layout-sider">
				<Link to="/home" >
					<div className="ant-layout-logo"></div>
				</Link>
				<ul className="ant-menu" >
		          	{menu}
		        </ul>
			</aside>	
		)
	}
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;
Sidebar.contextTypes = {
  router: React.PropTypes.object
}

export default Sidebar;



