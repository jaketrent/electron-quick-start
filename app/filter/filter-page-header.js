import React from 'react'
import styleable from 'react-styleable'

import css from './filter-page-header.css'

function FilterPageHeader(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.left}>{props.left}</div>
      <div className={props.css.center}>{props.center}</div>
      <div className={props.css.right}>{props.right}</div>
    </div>
  )
}

export default styleable(css)(FilterPageHeader)
