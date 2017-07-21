import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ThemeSwitch extends Component {
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
                <button style={{ color: this.state.themeColor }}>Red</button>
                <button style={{ color: this.state.themeColor }}>Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch;