import { combineReducers } from 'redux'

import browse from '../../browse/reducer'
import filter from '../../filter/reducer'

const rootReducer = combineReducers({
  browse,
  filter
})

export default rootReducer
