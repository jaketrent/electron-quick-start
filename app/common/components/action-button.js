import { Link } from 'react-router'
import React from 'react'
import styleable from 'react-styleable'

import css from './action-button.css'

const { string } = React.PropTypes

function ActionButton(props) {
  return (
    <Link to={props.to} className={props.css.btn}>
      {props.children}
      <i className={props.css.btnIcon}>▶</i>
    </Link>
  )
}

ActionButton.propTypes = {
  to: string.isRequired
}

export default styleable(css)(ActionButton)
