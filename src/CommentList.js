import React, { Component } from 'react'

class CommentList extends Component {
    static defaultProps = {
        comments: {},
      }
    render() {
        return (
            <div>{this.props.username} : {this.props.comment}</div>
        )
    }
}

export default CommentList