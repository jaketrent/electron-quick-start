import types from 'redux-types'

import { selector as browse } from '../browse/reducer'

export const name = 'filter'

export const ACTION_TYPES = types(name,
  'SET_ACTIVE_INDEX',
  'MARK_KEEP',
  'MARK_DESTROY',
  'CLEAR_MARKS'
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

export function markKeep(index) {
  return {
    type: ACTION_TYPES.MARK_KEEP,
    index
  }
}

export function markDestroy(index) {
  return {
    type: ACTION_TYPES.MARK_DESTROY,
    index
  }
}

export function clearMarks(index) {
  return {
    type: ACTION_TYPES.CLEAR_MARKS,
    index
  }
}
