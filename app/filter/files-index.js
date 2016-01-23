import React from 'react'
import styleable from 'react-styleable'

import css from './files-index.css'

const { arrayOf, bool, func, number, shape, string } = React.PropTypes

function getPreviewClassName(props) {
  if (props.isActive) return props.css.previewActive
  if (props.isMarkedKeep(props.index)) return props.css.previewToKeep
  if (props.isMarkedDestroy(props.index)) return props.css.previewToDestroy
  return props.css.preview
}

function FilePreview(props) {
  return (
    <div className={getPreviewClassName(props)}>
      {props.index}
    </div>
  )
}

FilePreview.propTypes = {
  file: shape({
    name: string.isRequired,
    path: string.isRequired
  }),
  index: number,
  isActive: bool,
  isMarkedDestroy: func,
  isMarkedKeep: func,
}

function renderFile(props, file, i) {
  return (
    <FilePreview css={props.css}
                 file={file}
                 index={i}
                 isActive={props.activeIndex === i}
                 isMarkedDestroy={props.isMarkedDestroy}
                 isMarkedKeep={props.isMarkedKeep} />
  )
}

function renderFiles(props) {
  return (props.files || []).map(renderFile.bind(null, props))
}

function FilesIndex(props) {
  return (
    <ol className={props.css.root}>
      {renderFiles(props)}
    </ol>
  )
}

FilesIndex.propTypes = {
  activeIndex: number,
  files: arrayOf(shape({
    name: string.isRequired,
    path: string.isRequired
  })),
  isMarkedDestroy: func.isRequired,
  isMarkedKeep: func.isRequired
}

export default styleable(css)(FilesIndex)
