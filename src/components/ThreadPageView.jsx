import React, {Component} from 'react'

import Comments from './Comments.jsx'

export default class ThreadPageView extends Component {
  render() {
    let {message} = this.props
    return <div>
      <p>{message}</p>
      <Comments/>
    </div>
  }
}