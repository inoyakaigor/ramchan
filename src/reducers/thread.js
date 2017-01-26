import {
  SHOW_THREAD
} from '../constants/thread.js'

const initialState = {
  comments: [
    {date: new Date()*1, text: 'Hello comments!'}
  ]
}

export default function thread(state = initialState, action) {
  switch (action.type) {
    case SHOW_THREAD:
      return {...state, id: action.id}
    default:
      return state
  }
}