import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

class CommentList extends Component {
    // 默认属性配置
    static defaultProps = {
        comments: []
    };

    // 属性类型限定
    static propTypes = {
        comments: PropTypes.array
    };

    // 构造函数
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    // 渲染函数
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment comment={comment} key={i} />
                )}
            </div>
        )
    }
}

export default CommentList;