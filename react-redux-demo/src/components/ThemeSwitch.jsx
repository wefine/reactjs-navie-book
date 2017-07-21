import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ThemeSwitch extends Component {
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
                <button>Red</button>
                <button>Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch;