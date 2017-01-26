import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton';
import * as threadActions from '../actions/Thread.js'


class ThreadPreviews extends Component {
  gotoThread(thread) {
    console.log('GO TO THREAD', thread)
    const {showThread} = this.props.threadActions
    showThread(thread.date)
  }
  render() {
    const {threads} = this.props
    return <div>
      {threads.map((thread, idx) => {
        return <Paper key={idx}>
                 <p>{thread.message}</p>
                 <RaisedButton
                    label="Перейти"
                    primary={true}
                    onTouchTap={this.gotoThread.bind(this, thread)}
                  />
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