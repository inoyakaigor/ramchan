import React, {Component} from 'react'
import {timeFormatter} from '../lib'

export default class ThreadHeader extends Component {
  render() {
    const date = this.props.date
    timeFormatter.pattern = "%d.%m.%y в %h:%m"
    const formatted_date = timeFormatter.toFormattedString(date)
    return <h5 className='thread-header'>
              Написал Аноним {formatted_date}
           </h5>
  }
}