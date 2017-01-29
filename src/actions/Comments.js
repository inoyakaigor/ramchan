import {
  ADD_COMMENT,
  COMMENT_WRITTEN
} from '../constants/comments.js'

export function addComment(tid, text) {
  return (dispatch) => {
    dispatch({
      type: ADD_COMMENT,
      payload: {tid: tid*1, date: new Date()*1, text}
    })
  }
}