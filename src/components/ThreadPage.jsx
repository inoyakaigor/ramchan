import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import ThreadPageView from './ThreadPageView.jsx'
import * as threadActions from '../actions/Thread.js'

class ThreadPage extends Component {
  storeCurrThread(id) {
    const {setCurrThread} = this.props.threadActions
    setCurrThread(id)
  }
  render() {
    const threads = this.props.threads
    const tid = this.props.params.id
    this.storeCurrThread(tid)
    const curr_thread = threads.filter((thread) => thread.id == tid)[0]
    if (curr_thread) {
      const message = curr_thread.message
      return <ThreadPageView message={message}/>
    } else {
      return <div>I saw some shit</div>
    }
  }
}

function mapStateToProps (state) {
  return {
    threads: state.app.threads
  }
}

function mapDispatchToProps(dispatch) {
  return {
    threadActions: bindActionCreators(threadActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ThreadPage)