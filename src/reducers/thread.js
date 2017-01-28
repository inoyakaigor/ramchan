import {
  SET_CURR_THREAD
} from '../constants/thread.js'

const initialState = {
  curr_thread: null
}

export default function thread(state = initialState, action) {
  switch (action.type) {
    case SET_CURR_THREAD:
      return {...state, curr_thread: action.payload}
    default:
      return state
  }
}