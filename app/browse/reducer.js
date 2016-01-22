import { ACTION_TYPES } from './actions'

export const initialState = {
  directory: null,
  files: []
}

function handleSetDirectory(state, action) {
  return {
    ...state,
    directory: action.directory
  }
}

function handleSetFiles(state, action) {
  return {
    ...state,
    files: action.files
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [ACTION_TYPES.SET_DIRECTORY]: handleSetDirectory,
    [ACTION_TYPES.SET_FILES]: handleSetFiles
  }

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'browse',
  select(state) {
    return {
      ...state.browse,
      getFile(i) {
        const file = state.browse.files[i]
        return file ? file : {}
      }
    }
  }
}
