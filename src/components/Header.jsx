import React, {Component} from 'react'

export default class Header extends Component {
  render() {
    return <header className='page-header'>
      <h1>Анонимная <span className='strike'>имидж</span>борда. Добро пожаловать. Снова.</h1>
    </header>
  }
}