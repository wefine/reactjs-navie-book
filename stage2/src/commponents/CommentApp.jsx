import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    // 构造函数
    constructor() {
        super();
        this.state = {
            comments : []
        }
    }

    submit(comment) {
        if (!comment) return;

        const {name, content} = comment;
        if (!name) return alert('请输入用户名！');
        if (!content) return alert('请输入评论内容！');

        console.log('name=' + name + '; content=' + content);

        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        })
    }

    // 渲染函数
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.submit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;