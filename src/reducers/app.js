import {
  GET_POSTS,
  WRITE_POST,
  POST_WRITTEN
} from '../constants/app.js'

const initialState = {
  threads: [
    {date: new Date()*1, message: 'Hello post!'}
  ],
  writing: false
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {...state, threads: action.payload, writing: false}
    case WRITE_POST:
      return {...state, writing: action.writing}
    case POST_WRITTEN:
      return {...state, message: action.payload, writing: action.writing}
    default:
      return state
  }
}