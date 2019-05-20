import React, { Component } from 'react'
import { log } from './utils/utils'

class CommentInput extends Component {
    constructor () {
        super()
        this.state = {
            username: '',
            comment: '',
            createdTime: '',
        }
    }

    componentWillMount() {
        // log('load', this._loadUsername)
        this._loadUsername()
    }

    componentDidMount() {
        this.textarea.focus()
    }

    _loadUsername = () => {
        let username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    _saveUsername = (username) => {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur = (e) => {
        this._saveUsername(e.target.value)
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
        if (this.props.onSubmit) {
            let createdTime = {createdTime: new Date()}
            this.props.onSubmit({...this.state, ...createdTime})
        }
        this.setState({
            username: '',
            comment: '',
            createdTime: '',
        })
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                    <input
                        value={this.state.username}
                        onChange={this.usernameChange}
                        onBlur={this.handleUsernameBlur.bind(this)}
                    />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                    <textarea
                        value={this.state.comment}
                        onChange={this.CommentChange}
                        ref={(textarea) => this.textarea = textarea}
                    />
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
