import types from 'redux-types'

import { selector as browse } from '../browse/reducer'

export const name = 'filter'

export const ACTION_TYPES = types(name,
  'SET_ACTIVE_INDEX'
)

function getIndexWithinFileBounds(filesCount, index) {
  if (!index) return 0
  if (index < 0 && filesCount > 0) return filesCount - 1
  if (index >= filesCount) return 0
  return index
}

export function setActiveIndex(index) {
  return (dispatch, getState) => {
    const filesCount = browse.select(getState()).files.length

    dispatch({
      type: ACTION_TYPES.SET_ACTIVE_INDEX,
      index: getIndexWithinFileBounds(filesCount, index)
    })
  }
}
