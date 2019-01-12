import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// import { Layout, Row, Col, Avatar, Input, Menu, Dropdown, Icon, Badge  } from 'antd';
// import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'

// import SiderComponent from './sider'
// import Tooltip from '../component/tooltip'
// import MyNews from '../component/myNews'

// const { Header, Footer, Sider, Content  } = Layout;

// 
// const menu = (
//     <div>
//         const menu
//     </div>
// );

export default class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '1',
            valueTxt: '',
        }
    }

    // getValue (val,value) {
    //     this.setState ({
    //         value: val,
    //         valueTxt: value
    //     })
    // }

    render () {
        return (
            <div>
                index!
                {this.props.children}
            </div> 
        )
    }
}
