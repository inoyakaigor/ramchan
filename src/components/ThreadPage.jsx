import React, {Component} from 'react'
import {Link} from 'react-router'

export default class ThreadPage extends Component {
  render() {
    return <div>
      THREAD PAGE {this.props.params.id ? '#' + this.props.params.id : ''}
    </div>
  }
}