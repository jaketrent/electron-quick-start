import types from 'redux-types'

import * as directoryUtils from './directory'

export const name = 'browse'

export const ACTION_TYPES = types(name,
  'SET_DIRECTORY',
  'SET_FILES',
  'SET_DESTINATION'
)

export function setDirectory(directory) {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTION_TYPES.SET_DIRECTORY,
      directory
    })

    try {
      const files = await directoryUtils.getImageFiles(directory)
      dispatch(setFiles(files))
    } catch (err) {
      console.log("err", err)
      // TODO: notification of error
    }
  }
}

export function setFiles(files) {
  return {
    type: ACTION_TYPES.SET_FILES,
    files
  }
}

export function setDestination(directory) {
  return {
    type: ACTION_TYPES.SET_DESTINATION,
    directory
  }
}
