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
    const message = threads.filter((thread) => thread.id == tid)[0].message
    return <ThreadPageView message={message}/>
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