import * as actions from './actions'
import store from '../common/store'

const shortcuts = {
  68: actions.next, // f
  65: actions.prev, // s
  87: actions.markKeep, // e
  83: actions.markDestroy, // d

  39: actions.next, // right
  37: actions.prev, // left
  38: actions.markKeep, // up
  40: actions.markDestroy, // down

  32: actions.clearMarks  // space
}

export default function useShortcuts(evt) {
  console.log("evt.keyCode", evt.keyCode)
  const shortcut = shortcuts[evt.keyCode]
  if (shortcut)
    store.dispatch(shortcut())
}
