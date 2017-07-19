import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
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
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea>

                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;