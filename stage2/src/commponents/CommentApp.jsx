import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
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

    submit(comment) {
        const {name, content} = comment;
        console.log('name=' + name + '; content=' + content);
    }

    // 渲染函数
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.submit.bind(this)}/>
                <CommentList/>
            </div>
        )
    }
}

export default CommentApp;