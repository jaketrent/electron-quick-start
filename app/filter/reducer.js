import clone from 'lodash/lang/clone'

import { ACTION_TYPES } from './actions'
import { ACTION_TYPES as BROWSE_ACTION_TYPES } from '../browse/actions'

export const initialState = {
  activeIndex: 0,
  toKeep: [],
  toDestroy: []
}

function handleSetActiveIndex(state, action) {
  return {
    ...state,
    activeIndex: action.index
  }
}

function handleMarkKeep(state, action) {
  const indexInDestroy = state.toDestroy.indexOf(action.index)
  let toDestroy = state.toDestroy
  if (indexInDestroy > -1) {
    toDestroy = clone(state.toDestroy)
    toDestroy.splice(indexInDestroy, 1)
  }
  return {
    ...state,
    toKeep: state.toKeep.concat([action.index]).sort(),
    toDestroy
  }
}

function handleMarkDestroy(state, action) {
  const indexInKeep = state.toKeep.indexOf(action.index)
  let toKeep = state.toKeep
  if (indexInKeep > -1) {
    toKeep = clone(state.toKeep)
    toKeep.splice(indexInKeep, 1)
  }
  return {
    ...state,
    toDestroy: state.toDestroy.concat([action.index]).sort(),
    toKeep
  }
}

function handleClearMarks(state, action) {
  const indexInKeep = state.toKeep.indexOf(action.index)
  let toKeep = state.toKeep
  if (indexInKeep > -1) {
    toKeep = clone(state.toKeep)
    toKeep.splice(indexInKeep, 1)
  }

  const indexInDestroy = state.toDestroy.indexOf(action.index)
  let toDestroy = state.toDestroy
  if (indexInDestroy > -1) {
    toDestroy = clone(state.toDestroy)
    toDestroy.splice(indexInDestroy, 1)
  }

  return {
    ...state,
    toKeep,
    toDestroy
  }
}

function handleSetFiles(state) {
  return {
    ...state,
    activeIndex: initialState.activeIndex,
    toKeep: initialState.toKeep,
    toDestroy: initialState.toDestroy
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [ACTION_TYPES.SET_ACTIVE_INDEX]: handleSetActiveIndex,
    [ACTION_TYPES.MARK_KEEP]: handleMarkKeep,
    [ACTION_TYPES.MARK_DESTROY]: handleMarkDestroy,
    [ACTION_TYPES.CLEAR_MARKS]: handleClearMarks,
    [BROWSE_ACTION_TYPES.SET_FILES]: handleSetFiles
  }

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'filter',
  select(state) {
    return {
      ...state.filter,
      isMarkedKeep(index) {
        return state.filter.toKeep.includes(index)
      },
      isMarkedDestroy(index) {
        return state.filter.toDestroy.includes(index)
      },
      getToKeepFiles(allFiles) {
        return allFiles.filter((f, i) => state.filter.toKeep.includes(i))
      }
    }
  }
}
