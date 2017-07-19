import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
    // 属性类型限定
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    // 构造函数
    constructor() {
        super();
        this.state = {
            name: '',
            content: ''
        }
    }

    nameChanged(event) {
        this.setState({
            name: event.target.value
        })
    }

    contentChanged(event) {
        this.setState({
            content: event.target.value
        })
    }

    submit () {
        if (this.props.onSubmit) {
            const { name, content } = this.state;
            this.props.onSubmit({name, content})
        }
        this.setState({ content: '' })
    }

    // 渲染函数
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">用户名：</span>
                    <div className="comment-field-input">
                        <input value={this.state.name}
                               onChange={this.nameChanged.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea value={this.state.content} onChange={this.contentChanged.bind(this)}>

                        </textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.submit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput;