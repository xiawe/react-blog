import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { log } from './utils/utils'

class CommentList extends Component {
    static propTypes = {
        commentData: PropTypes.object.isRequired,
    }

    static defaultProps = {
        commentData: {},
    }

    constructor() {
        super()
        this.state = {
            timeString: '',
            commentData: null,
        }
    }

    componentWillMount() {
        if (this.props.commentData == {}) {
            log('prop comment {}')
            return
        }
        this._updateTimeString()
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._time)
    }

    _updateTimeString = () => {
        let comment = this.props.commentData
        // log('comment', comment)
        let duration = (Number(Date.now()) - Number(comment.createdTime)) / 1000
        this.setState({
            timeString: duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(duration)} 秒前`
        })
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.commentData.username} </span>：
                </div>
                <p>{this.props.commentData.comment}</p>
                <span className='comment-createdtime'>
                    {this.state.timeString}
                </span>
                <span className='comment-delete' onClick={this.props.handleDelete}>
                    删除
                </span>
            </div>
        )
    }
}

export default CommentList
