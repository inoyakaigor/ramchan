import {
  ADD_COMMENT,
  WRITE_COMMENT,
  COMMENTS_LOADED
} from '../constants/comments.js'

const initialState = {
  writing_c: false,
  all: []
}

export default function comments(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      let new_comments = state.all.slice()
      new_comments.push(action.payload)
      return {...state, all: new_comments}

    case COMMENTS_LOADED:
      let sync_comments = state.all.slice()
      sync_comments = action.payload
      return {...state, all: sync_comments, fetching: false}

    default:
      return state
  }
}