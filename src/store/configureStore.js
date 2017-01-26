import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'

export default function configureStore(initialState) {
  const logger = createLogger()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const routerMW = routerMiddleware(browserHistory)
  const store = createStore(
                            rootReducer,
                            initialState,
                            composeEnhancers(applyMiddleware(thunk, logger, routerMW))
                            )

  if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers')
        store.replaceRerducer(nextRootReducer)
      })
  }
  return store
}