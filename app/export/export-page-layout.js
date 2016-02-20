import React from 'react'
import styleable from 'react-styleable'

import css from './export-page-layout.css'

function ExportPageLayout(props) {
  return (
    <div className={props.css.root}>{props.children}</div>
  )
}

export default styleable(css)(ExportPageLayout)
