import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App.jsx'
import ThreadPage from './components/ThreadPage.jsx'
import NotFound from './components/NotFound.jsx'

export const routes = (
  <div>
    <Route path='/'>
      <IndexRoute component={App}/>
      <Route path='/thread(/:tid)' component={ThreadPage} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
)