import {
  ADD_COMMENT,
  COMMENT_WRITTEN
} from '../constants/comments.js'

export function addComment(tid, text) {
  if (!text.trim()) return (dispatch) => dispatch
  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {tid, date: new Date()*1, text}
    })
  }
}