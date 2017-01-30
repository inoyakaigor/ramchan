import {
  WRITE_POST,
  POST_WRITTEN,
  THREADS_LOADED
} from '../constants/app.js'

export function writePost(cancel) {
  if (cancel) {
    return (dispatch) => {
      dispatch({
        type: WRITE_POST,
        payload: {writing: false}
      })
    }
  }
  return (dispatch) => {
    dispatch({
      type: WRITE_POST,
      payload: {writing: true}
    })
  }
}

export function postWritten(params) {
  return (dispatch, getState, getFirebase) => {
    let new_post = {tid: params.tid, date: new Date()*1, message: params.message}
    const firebase = getFirebase()
    firebase
      .helpers
      .push('threads', new_post)
      .then(()=>{
        dispatch({
          type: POST_WRITTEN,
          payload: {...new_post, writing: false}
        })
      })
  }
}

export function getThreads() {
  return (dispatch, getState, getFirebase) => {
    const firebase = getFirebase()
    firebase
      .ref('/threads')
      .once('value')
      .then((snapshot_threads)=>{
          let threads = snapshot_threads.val()
          dispatch({
            type: THREADS_LOADED,
            payload: Object.keys(threads).map((key) => threads[key])
          })
        }
      )
  }
}