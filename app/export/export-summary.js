import React from 'react'
import styleable from 'react-styleable'

import css from './export-summary.css'

const { string, number } = React.PropTypes

function ExportSummary(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.panel}>
        <div className={props.css.num}>{props.srcCount}</div>
        <div className={props.css.label}>photos</div>
        <code className={props.css.dir}>{props.srcDirectory}</code>
      </div>
      <div className={props.css.divider}>&#10095;</div>
      <div className={props.css.panel}>
        <div className={props.css.num}>{props.destinationCount}</div>
        <div className={props.css.label}>to keep</div>
        <code className={props.css.dir}>{props.destinationDirectory}</code>
      </div>
    </div>
  )
}

ExportSummary.propTypes = {
  srcCount: number,
  srcDirectory: string,
  destinationCount: number,
  destinationDirectory: string
}

export default styleable(css)(ExportSummary)
