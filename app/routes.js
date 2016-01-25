import React from 'react'
import { Route, IndexRoute } from 'react-router'
import DefaultLayout from './common/layouts/default'
import Browse from './browse'
import Export from './export'
import Filter from './filter'

export default (
  <Route path="/" component={DefaultLayout}>
    <IndexRoute name="browse" component={Browse} />
    <Route path="/filter" name="filter" component={Filter} />
    <Route path="/export" name="export" component={Export} />
  </Route>
)
