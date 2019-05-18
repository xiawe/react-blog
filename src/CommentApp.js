import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import { log } from './utils/utils'

class CommentApp extends Component {
    constructor () {
        super()
        this.state = {
            info: []
        }
    }

    onSubmit = (userInfo) => {
        this.setState((prevState) => ({
            info: [...prevState.info, userInfo]
        }))
    }

    render() {
        return (
        <div className='wrapper'>
            <CommentInput onSubmit={this.onSubmit.bind(this)} />
            {this.state.info.map((item, i) => 
                <CommentList 
                    username={item.username} 
                    comment={item.comment} 
                    key={i}
                />
            )}
        </div>
        )
    }
}

export default CommentApp