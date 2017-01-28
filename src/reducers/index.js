import {combineReducers} from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './app'
import thread from './thread'
import comments from './comments'

export default combineReducers({
  app, thread, comments, routing: routerReducer
})