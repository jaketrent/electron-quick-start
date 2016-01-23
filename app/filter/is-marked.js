import React from 'react'
import styleable from 'react-styleable'

import css from './is-marked.css'

const { bool, string } = React.PropTypes

function IsMarked(props) {
  const className = props.is ? props.css.root : props.css.rootNegative
  const label = props.children ? props.children : 'Is marked?'
  const answer = props.is ? 'Yes' : 'No'
  return (
    <div className={className}>{label} {answer}</div>
  )
}

IsMarked.propTypes = {
  is: bool,
  label: string
}

export default styleable(css)(IsMarked)
