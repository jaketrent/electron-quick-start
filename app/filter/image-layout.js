import React from 'react'
import styleable from 'react-styleable'

import css from './image-layout.css'

const { arrayOf, node } = React.PropTypes

function renderDatum(props, datum) {
  return (
    <div className={props.css.datum}>{datum}</div>
  )
}

function renderMeta(props) {
  return (props.meta || []).map(d => renderDatum(props, d))
}

function ImageLayout(props) {
  return (
    <div className={props.css.root}>
      <div className={props.css.meta}>
        {renderMeta(props)}
      </div>
      {props.children}
    </div>
  )
}

ImageLayout.propTypes = {
  meta: arrayOf(node)
}

export default styleable(css)(ImageLayout)
