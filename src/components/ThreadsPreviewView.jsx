import React, {Component} from 'react'
import {connect} from 'react-redux'

import ThreadPreviews from './ThreadPreviews.jsx'

class ThreadsPreviewView extends Component {
  render() {
    const {threads} = this.props
    return (
      threads.length
      ? <ThreadPreviews threads={threads}/>
      : <h3>Ни одного поста не написано</h3>
    )
  }
}

function mapStateToProps (state) {
  return {
    threads: state.app.threads
  }
}

export default connect(mapStateToProps)(ThreadsPreviewView)