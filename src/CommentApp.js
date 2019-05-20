import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { log } from './utils/utils'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            info: [
                // {
                //     username: 'test',
                //     comment: 'ttt',
                //     createdTime: '1558338148109',
                // }
            ]
        }
    }

    onSubmit = (userInfo) => {
        this.setState((prevState) => ({
            info: [...prevState.info, userInfo]
        }))
    }

    onDelete = (id) => {
        log('delete id', id)
        this.setState((prevState) => {
            return {info: prevState.info.filter((item, index) => index != id)}
        })
    }

    render() {
        return (
        <div className='wrapper'>
            <CommentInput onSubmit={this.onSubmit.bind(this)} />
            {this.state.info.map((item, i) =>
                <CommentList
                    commentData={item}
                    handleDelete={this.onDelete.bind(this, i)}
                    key={i}
                />
            )}
        </div>
        )
    }
}

export default CommentApp
