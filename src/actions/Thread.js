import {
  SHOW_THREAD
} from '../constants/thread.js'
import { LOCATION_CHANGE } from 'react-router-redux'
import { browserHistory } from 'react-router'

export function showThread(id) {
  return (dispatch) => {
    /*dispatch({
      type: SHOW_THREAD,
      payload: {id: id}
    })*/
    dispatch({
      type: LOCATION_CHANGE,
      payload: {action: "PUSH", pathname: "/thread/"+id, search: ""}
    })
  }
}
