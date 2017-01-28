import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import CommentsView from './CommentsView.jsx'
import * as commentsActions from '../actions/Comments.js'

class Comments extends Component {
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
        <button>Добавить?</button>
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