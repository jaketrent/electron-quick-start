import React from 'react'
import styleable from 'react-styleable'

import css from './copy-summary.css'

const { arrayOf, shape, string } = React.PropTypes

function CopySummary(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.output}>Success / Error: {props.successes.length} / {props.errors.length}</div>
    </div>
  )
}

CopySummary.propTypes = {
  errors: arrayOf(shape({
    path: string.isRequired
  })),
  successes: arrayOf(shape({
    path: string.isRequired
  }))
}

export default styleable(css)(CopySummary)
