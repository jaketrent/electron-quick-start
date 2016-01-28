import React from 'react'
import styleable from 'react-styleable'

import css from './header.css'

function Header(props) {
  return (
    <div className={props.css.root}>
      <h1 className={props.css.title}>photosurf</h1>
    </div>
  )
}

export default styleable(css)(Header)
