import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
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

            </div>
        )
    }
}

export default Comment;