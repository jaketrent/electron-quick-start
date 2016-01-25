import { ACTION_TYPES } from './actions'

export const initialState = {
  successes: [],
  errors: []
}

function handleCopySuccess(state, action) {
  return {
    ...state,
    successes: state.successes.concat([action.file])
  }
}

function handleCopyError(state, action) {
  return {
    ...state,
    errors: state.errors.concat([action.file])
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [ACTION_TYPES.COPY_SUCCESS]: handleCopySuccess,
    [ACTION_TYPES.COPY_ERROR]: handleCopyError
  }

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'export',
  select(state) {
    return {
      ...state,
      getSuccessFiles(allFiles) {
        return allFiles.filter(f => state.export.successes.includes(f))
      },
      getErrorFiles(allFiles) {
        return allFiles.filter(f => state.export.errors.includes(f))
      }
    }
  }
}
