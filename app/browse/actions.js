import types from 'redux-types'

export const name = 'browse'

export const ACTION_TYPES = types(name,
  'SET_DIRECTORY',
  'SET_FILES'
)

export function setDirectory(directory) {
  return {
    type: ACTION_TYPES.SET_DIRECTORY,
    directory
  }
}

export function setFiles(files) {
  return {
    type: ACTION_TYPES.SET_FILES,
    files
  }
}
