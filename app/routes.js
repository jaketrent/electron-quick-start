import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from './common/layouts/default'
import Browse from './browse'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute component={Browse} />
  </Route>
)
