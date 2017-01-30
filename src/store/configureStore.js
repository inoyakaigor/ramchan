import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerMiddleware, push } from 'react-router-redux'
import { browserHistory } from 'react-router'
import { reactReduxFirebase } from 'react-redux-firebase'
import { getFirebase } from 'react-redux-firebase'

var config = {
  apiKey: "AIzaSyAkQCNZSEb5zx_N-PUiu_XTUG0zR1xaqIs",
  authDomain: "ramblerach.firebaseapp.com",
  databaseURL: "https://ramblerach.firebaseio.com",
  storageBucket: "ramblerach.appspot.com",
  messagingSenderId: "616145209536"
};

export default function configureStore(initialState) {
  const logger = createLogger()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const routerMW = routerMiddleware(browserHistory)
  const store = createStore(
                              rootReducer,
                              initialState,
                              composeEnhancers(
                                applyMiddleware(
                                  thunk.withExtraArgument(getFirebase),
                                  logger,
                                  routerMW
                                ),
                                reactReduxFirebase(config,
                                                    {
                                                      userProfile: 'users',
                                                      enableLogging: false
                                                    }
                                                  )
                              )
                            )

  if (module.hot) {
      module.hot.accept('../reducers', () => {
        const nextRootReducer = require('../reducers')
        store.replaceRerducer(nextRootReducer)
      })
  }
  return store
}