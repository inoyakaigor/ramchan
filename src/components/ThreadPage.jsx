import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'

import ThreadPageView from './ThreadPageView.jsx'
import * as threadActions from '../actions/Thread.js'

class ThreadPage extends Component {
  storeCurrThread(tid) {
    const {setCurrThread} = this.props.threadActions
    setCurrThread(tid)
  }
  render() {
    const threads = this.props.threads
    const tid = this.props.params.tid
    this.storeCurrThread(tid)
    const curr_thread = threads.filter((thread) => thread.tid == tid)[0]
    if (curr_thread) {
      const message = curr_thread.message
      const date = curr_thread.date
      return <div>

        <ThreadPageView message={message} date={date}/>
      </div>
    } else {
      return <div>
        <Link to='/' className='back-link'>← На главную</Link><br/>
        I saw some shit
      </div>
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