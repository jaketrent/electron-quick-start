import React from 'react'
import styleable from 'react-styleable'

import css from './filter-page-layout.css'

function FilterPageLayout(props) {
  return (
    <div className={props.css.root}>
      {props.children}
    </div>
  )
}

export default styleable(css)(FilterPageLayout)
