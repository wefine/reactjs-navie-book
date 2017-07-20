import React, {Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
    // 构造函数
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }

    componentWillMount() {
        this._loadComments();
    }

    _loadComments() {
        let comments = localStorage.getItem("comments");
        console.log("_loadComments" + comments);
        if(comments) {
            comments = JSON.parse(comments);
            this.setState({ comments });
        }
    }

    _saveComments(){
        console.log("_saveComments");
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
    }

    handleSubmit(comment) {
        if (!comment) return;

        const {name, content} = comment;
        if (!name) return alert('请输入用户名！');
        if (!content) return alert('请输入评论内容！');

        console.log('name=' + name + '; content=' + content);

        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        });

        this._saveComments();
    }

    // 渲染函数
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.handleSubmit.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommentApp;