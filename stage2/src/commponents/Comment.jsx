import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
    // 默认属性配置
    static defaultProps = {
    };

    // 属性类型限定
    static propTypes = {
        comment: PropTypes.object.isRequired
    };

    // 构造函数
    constructor() {
        super();
        this.state = {}
    }

    // 渲染函数
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.name}</span>:
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}

export default Comment;