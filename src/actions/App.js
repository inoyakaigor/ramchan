import {
  GET_POSTS,
  WRITE_POST,
  POST_WRITTEN
} from '../constants/app.js'

export function writePost(cancel) {
  if (cancel) {
    return (dispatch) => {
      dispatch({
        type: WRITE_POST,
        writing: false
      })
    }
  }
  return (dispatch) => {
    dispatch({
      type: WRITE_POST,
      writing: true
    })
  }
}

export function postWritten(message) {
  return (dispatch) => {
    dispatch({
      type: POST_WRITTEN,
      payload: {date: new Date()*1, message: message, writing: false}
    })
  }
}
