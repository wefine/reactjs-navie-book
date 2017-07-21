import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {
    // 默认属性配置
    static defaultProps = {
        name: ''
    };

    // 属性类型限定
    static propTypes = {
        name: PropTypes.string
    };

    // 构造函数
    constructor() {
        super();
        this.state = {}
    }

    // 渲染函数
    render() {
        return (
            <div>
                <p>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content;