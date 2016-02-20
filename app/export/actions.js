import fsExtra from 'fs-extra'
import path from 'path'
import types from 'redux-types'

export const name = 'export'

export const ACTION_TYPES = types('export',
  'COPY_TRANSITION_START',
  'COPY_SUCCESS',
  'COPY_ERROR'
)

export function copy(files, destination) {
  return (dispatch, getState) => {

    dispatch({
      type: ACTION_TYPES.COPY_TRANSITION_START
    })

    files.forEach(file => {

      fsExtra.copy(file.path, path.join(destination.path, file.name), (error) => {
        if (error)
          return dispatch({
            type: ACTION_TYPES.COPY_ERROR,
            file,
            destination,
            error
          })

        dispatch({
          type: ACTION_TYPES.COPY_SUCCESS,
          file,
          destination
        })
      })

    })

  }
}
