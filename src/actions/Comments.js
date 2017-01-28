import {
  ADD_COMMENT,
  WRITE_COMMENT
} from '../constants/comments.js'

export function addComment(text) {
  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {...state, text, writing_c: false}
    })
  }
}