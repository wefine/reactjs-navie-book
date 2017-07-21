import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ThemeSwitch from './ThemeSwitch';

class Content extends Component {

    static contextTypes = {
        store: PropTypes.object
    };

    constructor() {
        super();
        this.state = { themeColor: '' }
    }

    componentWillMount() {
        this._updateThemeColor()
    }

    _updateThemeColor() {
        const { store } = this.context;
        const state = store.getState();
        this.setState({ themeColor: state.themeColor })
    }

    // 渲染函数
    render() {
        return (
            <div>
                <p style={{ color: this.state.themeColor }}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content;