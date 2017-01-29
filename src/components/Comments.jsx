import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CommentsView from './CommentsView.jsx'
import * as commentsActions from '../actions/Comments.js'
import FormView from './FormView.jsx'

class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const {addComment} = this.props.commentsActions
    const curr_thread = this.props.curr_thread
    const message = new FormData(e.target).get('thread_message');

    e.target.thread_message.value = ''
    if (message.trim().length) addComment(curr_thread, message);
  }
  render() {
    let comments = this.props.comments.all
    const tid = this.props.curr_thread
    comments = comments.filter((comment) => comment.tid == tid)
    return <div>
        {comments.length
        ? <CommentsView comments={comments}/>
        : <div>
            Комментариев нет.<br/>
          </div>
         }
        <FormView handleSubmit={::this.handleSubmit}/>
      </div>
  }
}

function mapStateToProps (state) {
  return {
    comments: state.comments,
    curr_thread: state.thread.curr_thread
  }
}

function mapDispatchToProps(dispatch) {
  return {
    commentsActions: bindActionCreators(commentsActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments)