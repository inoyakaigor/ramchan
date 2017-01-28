import {
  ADD_COMMENT,
  WRITE_COMMENT
} from '../constants/comments.js'

const initialState = {
  writing_c: false,
  all: [
    {tid: 1, date: new Date()*1, text: 'Hello comments! Comment #1'}, // tid = thread id
    {tid: 2, date: new Date()*1, text: 'Hello comments! Comment #2'},
    {tid: 1, date: new Date()*1, text: 'Hello comments! Comment #3'}
  ]
}

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      let new_comments = state.all.slice()
      new_comments.push(action.payload)
      return {...state, all: new_comments}
    default:
      return state
  }
}