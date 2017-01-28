import {
  GET_POSTS,
  WRITE_POST,
  POST_WRITTEN
} from '../constants/app.js'

const initialState = {
  threads: [
    {id: 1, date: new Date()*1, message: 'Hello post!'}
  ],
  writing: false
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {...state, threads: action.payload, writing: false}
    case WRITE_POST:
      return {...state, writing: action.payload.writing}
    case POST_WRITTEN:
      let max_id = state.threads.sort((p, n) => {
        return p.id > n.id ? 1 : p.id < n.id ? -1 : 0
      }).slice(-1)[0].id
      let thread = {id: ++max_id, message: action.payload.message, date: action.payload.date}
      let threads = state.threads.concat(thread)
      return {...state, threads, writing: action.payload.writing}
    default:
      return state
  }
}