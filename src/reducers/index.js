import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app'
import thread from './thread'

export default combineReducers({
  app, thread, routing: routerReducer
})