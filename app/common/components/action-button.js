import { Link } from 'react-router'
import React from 'react'
import styleable from 'react-styleable'

import css from './action-button.css'

const { func, string } = React.PropTypes

function renderLink(props) {
  return (
    <Link to={props.to} className={props.css.btn}>
      {props.children}
      <i className={props.css.btnIcon}>▶</i>
    </Link>
  )
}

function renderButton(props) {
  return (
    <button onClick={props.onClick} className={props.css.btn}>
      {props.children}
      <i className={props.css.btnIcon}>▶</i>
    </button>
  )
}

function ActionButton(props) {
  return props.to
    ? renderLink(props)
    : renderButton(props)
}

ActionButton.propTypes = {
  onClick: func,
  to: string,
}

export default styleable(css)(ActionButton)
