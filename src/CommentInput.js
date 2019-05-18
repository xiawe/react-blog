import React, { Component } from 'react'
import { log } from './utils/utils'

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            comment: ''
        }
    }

    usernameChange = (e) => {
        let n = e.target.value
        this.setState({
            username: n,
        })
    }

    CommentChange = (e) => {
        let n = e.target.value
        this.setState({
            comment: n,
        })
    }

    submitComment = () => {
        this.props.onSubmit(this.state)
        this.setState({
            username: '',
            comment: '',
        })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                    <input value={this.state.username} onChange={this.usernameChange}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                    <textarea value={this.state.comment} onChange={this.CommentChange}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.submitComment}>
                    发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput