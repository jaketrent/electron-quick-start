import { ACTION_TYPES } from './actions'

export const initialState = {
  activeIndex: 0
}

function handleSetActiveIndex(state, action) {
  return {
    ...state,
    activeIndex: action.index
  }
}

export default function reduce(state = initialState, action = {}) {
  const handlers = {
    [ACTION_TYPES.SET_ACTIVE_INDEX]: handleSetActiveIndex
  }

  return handlers[action.type]
    ? handlers[action.type](state, action)
    : state
}

export const selector = {
  name: 'filter',
  select(state) {
    return state.filter
  }
}
