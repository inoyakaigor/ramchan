import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import * as threadActions from '../actions/Thread.js'
import ThreadHeader from './ThreadHeader.jsx'

class ThreadPreviews extends Component {
  gotoThread(thread) {
    const {showThread} = this.props.threadActions
    showThread(thread.tid)
  }
  render() {
    const {threads} = this.props
    return <div>
      {threads.map((thread, idx) => {
        return <Paper key={idx} className='thread-preview'>
                <ThreadHeader date={thread.date}/>
                <p className='thread-message'>{thread.message}</p>
                <div className='actions'>
                  <RaisedButton
                    label="Перейти"
                    primary={true}
                    onTouchTap={this.gotoThread.bind(this, thread)}
                  />
                </div>
               </Paper>
      })}
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThreadPreviews)