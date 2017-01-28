import {
  SET_CURR_THREAD
} from '../constants/thread.js'
import { LOCATION_CHANGE } from 'react-router-redux'

export function showThread(id) {
  return (dispatch) => {
    setCurrThread(id*1)

    dispatch({
      type: LOCATION_CHANGE,
      payload: {action: "PUSH", pathname: "/thread/"+id, search: ""}
    })
  }
}

export function setCurrThread(id) {
  return (dispatch) => {
    dispatch({
      type: SET_CURR_THREAD,
      payload: id
    })
  }
}