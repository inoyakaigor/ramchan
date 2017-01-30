import {
  ADD_COMMENT,
  COMMENT_WRITTEN,
  COMMENTS_LOADED
} from '../constants/comments.js'

export function addComment(tid, text) {
  return (dispatch, getState, getFirebase) => {
    let new_comment = {tid: tid*1, date: new Date()*1, text}
    const firebase = getFirebase()
    firebase
      .helpers
      .push('comments', new_comment)
      .then(()=>{
        dispatch({
          type: ADD_COMMENT,
          payload: new_comment
        })
      })
  }
}

export function getComments() {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .ref('/comments')
      .once('value')
      .then((snapshot_comments)=>{
          let comments = snapshot_comments.val()
          dispatch({
            type: COMMENTS_LOADED,
            payload: Object.keys(comments).map((key) => comments[key])
          })
        }
      )
  }
}