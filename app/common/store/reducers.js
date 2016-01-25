import { combineReducers } from 'redux'

import browse from '../../browse/reducer'
import exportReducer from '../../export/reducer'
import filter from '../../filter/reducer'

const rootReducer = combineReducers({
  browse,
  export: exportReducer,
  filter
})

export default rootReducer
