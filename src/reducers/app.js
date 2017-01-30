import {
  WRITE_POST,
  POST_WRITTEN,
  THREADS_LOADED
} from '../constants/app.js'

const initialState = {
  threads: [],
  writing: false,
  fetching: true
}

export default function app(state = initialState, action) {
  switch (action.type) {
    case THREADS_LOADED:
      return {...state, threads: action.payload, fetching: false}

    case WRITE_POST:
      return {...state, writing: action.payload.writing}

    case POST_WRITTEN:
      let thread = {tid: action.payload.tid, message: action.payload.message, date: action.payload.date}
      let threads = state.threads.concat(thread)
      return {...state, threads, writing: action.payload.writing}

    default:
      return state
  }
}